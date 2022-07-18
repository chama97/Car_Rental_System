import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Sidebar from "../../components/sidebar";
import AdminNavbar from "../../components/adminNavbar";
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DataTable from "../../components/dataTable";
import TextField from '@mui/material/TextField';



class Rental extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                rentalId: '',
                rentalCharge: '',
                damageCharge: '',
                additionalCharge: '',
                duration: '',
                totalCharge: '' 
            },
            alert: false,
            message: '',
            severity: '',
    
            data: [
                     { id: 1, rentalId: 'R001', rentalCharge: 8000, damageCharge: 3500, additionalCharge: 2000, duration: '2 days', totalCharge: 10000},
                     { id: 2, rentalId: 'R001', rentalCharge: 8000, damageCharge: 3500, additionalCharge: 2000, duration: '2 days', totalCharge: 10000},
                     { id: 3, rentalId: 'R001', rentalCharge: 8000, damageCharge: 3500, additionalCharge: 2000, duration: '2 days', totalCharge: 10000},
                     { id: 4, rentalId: 'R001', rentalCharge: 8000, damageCharge: 3500, additionalCharge: 2000, duration: '2 days', totalCharge: 10000}
                 ],

            loaded: true,

            // data: [],
            // loaded: false,

            columns: [
                
                {
                    field: 'rentalId',
                    headerName: 'Rental Id',
                    width: 120,
                },
                {
                    field: 'rentalCharge',
                    headerName: 'Rental Charge',
                    width: 200
                },
                {
                    field: 'damageCharge',
                    headerName: 'Damage Charge',
                    width: 200,
                },
                {
                    field: 'additionalCharge',
                    headerName: 'Additional Charge',
                    width: 180
                },
                {
                    field: 'duration',
                    headerName: 'Duration',
                    width: 160
                },
                {
                    field: 'totalCharge',
                    headerName: 'Total Charge',
                    width: 200
                }
            ]
        }
    }

    
    componentDidMount() {
        console.log('Post Screen Mounted!');
    }

    handleSubmit = async () => {
        console.log('save button clicked!!')
        
    }

    render(){
        let { classes } = this.props
        return(
            <Fragment className={classes.container}>

                <div className={classes.container}>

                    <div className={classes.leftSide}>
                        <Sidebar />
                    </div>
                    
                    <div className={classes.center}>

                        <div className={classes.appBar}>
                            <AdminNavbar />
                        </div>

                        <div className={classes.boxes}>

                        <div className={classes.widgets}>

                        <div className={classes.lblcustomer}><span>Rental Details</span></div> 
                            <hr className={classes.hr} /> 

                            <ValidatorForm ref="form" onSubmit={this.handleSubmit} onError={errors => console.log(errors)}>
                                <Grid container className={classes.gridss} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Damage Charge"
                                            size="small"
                                            value={this.state.formData.damageCharge}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.damageCharge = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Additional Charge"
                                            size="small"
                                            value={this.state.formData.additionalCharge}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.additionalCharge = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Refund"
                                            size="small"
                                            value={this.state.formData.refund}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.refund = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{display: 'flex', justifyContent:"flex-end"}}  >
                                        <Stack spacing={1} direction="row">
                                            <TextField id="filled-search" label="Search field" type="search" size="small" variant="outlined"/>
                                            <Button variant="outlined">Search</Button>
                                            <Button variant="outlined" color="error">Cancel</Button>
                                            <Button variant="contained">Update</Button>
                                            
                                        </Stack>
                                    </Grid>   
                                </Grid>
                            </ValidatorForm>
                        </div>
                        </div>

                        <div className={classes.table}>
                            <div className={classes.cartable}>          
                            {this.state.loaded &&
                                <Grid container style={{ height: '100%', width: '100%', padding: '5px' }}>
                                    <DataTable
                                        columns={this.state.columns}
                                        rows={this.state.data}
                                        rowsPerPageOptions={5}
                                        pageSize={5}
                                        checkboxSelection={true}
                                    /> 
                                </Grid>
                            }
                            </div>
                        
                        </div>

                    </div>
                    
                </div>
             
            </Fragment>
           
        )

    }
}

export default withStyles(styleSheet)(Rental) 