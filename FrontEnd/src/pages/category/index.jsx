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
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


class Category extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                regId: '',
                description: '',
                frontView: '',
                backView: '',
                sideView: '',
                interiorView: '' 
            },
            alert: false,
            message: '',
            severity: '',
    
            data: [
                     { id: 1, regId: 'R001', description: '', frontView: '', backView: '', sideView: '', interiorView: ''},
                    
                 ],

            loaded: true,

            // data: [],
            // loaded: false,

            columns: [
                
                {
                    field: 'regId',
                    headerName: 'Reg Id',
                    width: 120,
                },
                {
                    field: 'description',
                    headerName: 'Description',
                    width: 300
                },
                {
                    field: 'frontView',
                    headerName: 'Front View',
                    width: 150,
                },
                {
                    field: 'backView',
                    headerName: 'Back View',
                    width: 150
                },
                {
                    field: 'sideView',
                    headerName: 'Side View',
                    width: 150
                },
                {
                    field: 'interiorView',
                    headerName: 'Interior View',
                    width: 150
                },
                {
                    field: "action",
                    headerName: "Action",
                    width: 250,
                    renderCell: () => {
                      return (
                        <Tooltip title="Delete">
                            <IconButton
                                onClick={() => {
                                    console.log("delete icon clicked!")
                                    //this.deleteCustomer(row.id)
                                }}
                                >
                                <DeleteIcon color="error" />
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

                        <div className={classes.lblcustomer}><span>Car Categories</span></div> 
                            <hr className={classes.hr} /> 

                            <ValidatorForm ref="form" onSubmit={this.handleSubmit} onError={errors => console.log(errors)}>
                                <Grid container className={classes.gridss} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Reg Id"
                                            size="small"
                                            value={this.state.formData.regId}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.regId = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px',display: 'flex', justifyContent:"flex-end"}} >
                                        <Stack spacing={1} direction="row">
                                            <Button variant="outlined" component="label">
                                                Front View
                                                <input hidden accept="image/*" multiple type="file" />
                                            </Button>
                                            <Button variant="outlined" component="label">
                                                Back View
                                                <input hidden accept="image/*" multiple type="file" />
                                            </Button>
                                            <Button variant="outlined" component="label">
                                                Side View
                                                <input hidden accept="image/*" multiple type="file" />
                                            </Button>
                                            <Button variant="outlined" component="label">
                                                Inter View
                                                <input hidden accept="image/*" multiple type="file" />
                                            </Button>
                                        
                                        </Stack>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Description"
                                            size="small"
                                            value={this.state.formData.description}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.description = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%',hight: '100px' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{display: 'flex', justifyContent:"flex-end"}}  >
                                        <Stack spacing={1} direction="row">
                                            <TextField id="filled-search" label="Search field" type="search" size="small" variant="outlined"/>
                                            <Button variant="outlined">Search</Button>
                                            <Button variant="outlined" color="error">Cancel</Button>
                                            <Button variant="contained" color="success">Save</Button>
                                            
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

export default withStyles(styleSheet)(Category) 