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


class Driver extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: '',
                name: '',
                nic: '',
                license: '',
                address: '',
                contact: '' 
            },
            alert: false,
            message: '',
            severity: '',
    
            data: [
                     { id: 1, email: 'saman@gmail.com', password: '1234', name: 'Saman', nic: '122345553', license: '2334344323', address: 'Horana', contact: '0332323444'},
                     { id: 2, email: 'saman@gmail.com', password: '1234', name: 'Saman', nic: '122345553', license: '2334344323', address: 'Horana', contact: '0332323444'},
                     { id: 3, email: 'saman@gmail.com', password: '1234', name: 'Saman', nic: '122345553', license: '2334344323', address: 'Horana', contact: '0332323444'},
                     { id: 4, email: 'saman@gmail.com', password: '1234', name: 'Saman', nic: '122345553', license: '2334344323', address: 'Horana', contact: '0332323444'},
                     
                 ],

            loaded: true,

            // data: [],
            // loaded: false,

            columns: [
                
                {
                    field: 'email',
                    headerName: 'User Name',
                    width: 180,
                },
                {
                    field: 'password',
                    headerName: 'Password',
                    width: 150
                },
                {
                    field: 'name',
                    headerName: 'Name',
                    width: 150,
                },
                {
                    field: 'nic',
                    headerName: 'NIC',
                    width: 160
                },
                {
                    field: 'license',
                    headerName: 'License',
                    width: 160
                },
                {
                    field: 'address',
                    headerName: 'Address',
                    width: 150
                },
                {
                    field: 'contact',
                    headerName: 'Contact',
                    width: 150
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
                            <ValidatorForm ref="form" onSubmit={this.handleSubmit} onError={errors => console.log(errors)}>
                                <Grid container className={classes.gridss} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="User Name"
                                            size="small"
                                            value={this.state.formData.email}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.email = e.target.value
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
                                            label="Password"
                                            size="small"
                                            value={this.state.formData.password}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.password = e.target.value
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
                                            label="Name"
                                            size="small"
                                            value={this.state.formData.name}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.name = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6}  >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="NIC"
                                            size="small"
                                            value={this.state.formData.nic}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.nic = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6}  >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="License"
                                            size="small"
                                            value={this.state.formData.license}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.license = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6}  >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Address"
                                            size="small"
                                            value={this.state.formData.address}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.address = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6}  >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Contact"
                                            size="small"
                                            value={this.state.formData.contacat}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.contact = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{display: 'flex', justifyContent:"flex-end"}}  >
                                        <Stack spacing={2} direction="row">
                                            <Button variant="outlined">Cancel</Button>
                                            <Button variant="contained" color="error">Delete</Button>
                                            <Button variant="contained">Update</Button>
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

export default withStyles(styleSheet)(Driver) 