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
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';



class Schedule extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                sid: '',
                startDate: '',
                endDate: '',
                driverNic: ''
            },
            alert: false,
            message: '',
            severity: '',
    
            data: [
                     { id: 1, sid: 'S001', startDate: '2020-07-09', endDate: '2020-09-08', driverNic: '6352738378'},
                     { id: 2, sid: 'S001', startDate: '2020-07-09', endDate: '2020-09-08', driverNic: '6352738378'},
                     { id: 3, sid: 'S001', startDate: '2020-07-09', endDate: '2020-09-08', driverNic: '6352738378'},
                     { id: 4, sid: 'S001', startDate: '2020-07-09', endDate: '2020-09-08', driverNic: '6352738378'}
                 ],

            loaded: true,

            // data: [],
            // loaded: false,

            columns: [
                
                {
                    field: 'sid',
                    headerName: 'ID',
                    width: 200,
                },
                {
                    field: 'startDate',
                    headerName: 'Start Date',
                    width: 270
                },
                {
                    field: 'endDate',
                    headerName: 'End Date',
                    width: 270,
                },
                {
                    field: 'driverNic',
                    headerName: 'Driver Nic',
                    width: 260
                },
                {
                    field: "action",
                    headerName: "Action",
                    width: 110,
                    renderCell: () => {
                      return (
                        <Tooltip title="Edit">
                            <IconButton 
                                onClick={() => {
                                    console.log("edit icon clicked!")
                                    //this.updateCustomer(row);
                                }}
                                >
                                <EditIcon color="primary" />
                            </IconButton>
                        </Tooltip>
                      );
                    },
                },
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

                        <div className={classes.lblcustomer}><span>Schedule</span></div> 
                            <hr className={classes.hr} /> 

                            <ValidatorForm ref="form" onSubmit={this.handleSubmit} onError={errors => console.log(errors)}>
                                <Grid container className={classes.gridss} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Start Date"
                                            size="small"
                                            value={this.state.formData.startDate}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.startDate = e.target.value
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
                                            label="End Date"
                                            size="small"
                                            value={this.state.formData.endDate}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.endDate = e.target.value
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
                                            label="Driver NIC"
                                            size="small"
                                            value={this.state.formData.driverNic}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.driverNic = e.target.value
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

export default withStyles(styleSheet)(Schedule) 