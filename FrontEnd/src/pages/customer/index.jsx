import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Sidebar from "../../components/sidebar";
import AdminNavbar from "../../components/adminNavbar";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DataTable from "../../components/dataTable";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

class Customer extends Component{

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
                     { id: 1, email: 'amal@gmail.com', password: '1234', name: 'Amal', nic: '762938729V', license: '738372834', address: 'Colombo', contact: '0928273362' },
                     { id: 2, email: 'amal@gmail.com', password: '1234', name: 'Amal', nic: '762938729V', license: '738372834', address: 'Colombo', contact: '0928273362' },
                     { id: 3, email: 'amal@gmail.com', password: '1234', name: 'Amal', nic: '762938729V', license: '738372834', address: 'Colombo', contact: '0928273362' },
                     { id: 4, email: 'amal@gmail.com', password: '1234', name: 'Amal', nic: '762938729V', license: '738372834', address: 'Colombo', contact: '0928273362' },
                     { id: 5, email: 'amal@gmail.com', password: '1234', name: 'Amal', nic: '762938729V', license: '738372834', address: 'Colombo', contact: '0928273362' },
                 ],

            loaded: true,

            // data: [],
            // loaded: false,

            columns: [
                
                {
                    field: 'email',
                    headerName: 'User Name',
                    width: 200,
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
                    //sortable: false
                },
                {
                    field: 'nic',
                    headerName: 'NIC',
                    width: 150
                },
                {
                    field: 'license',
                    headerName: 'License',
                    width: 150
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
                },
            ]
        }
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

                        <div className={classes.table}>
                            <div className={classes.custable}>  
                            <div className={classes.lblcustomer}><span>Customers</span></div> 
                            <hr className={classes.hr} /> 

                            <Stack className={classes.stack} spacing={2} direction="row">
                                <TextField id="filled-search" label="Search field" type="search" size="small" variant="outlined"/>
                                <Button variant="outlined">Search</Button>
                                <Button variant="contained" color="error" startIcon={<DeleteIcon />}>Delete</Button>
                            </Stack>  

                            {this.state.loaded &&
                                <Grid container style={{ height: '100%', width: '100%', padding: '15px' }}>
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

export default withStyles(styleSheet)(Customer) 