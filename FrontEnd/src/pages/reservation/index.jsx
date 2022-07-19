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

class Reservation extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                reserveId: '',
                customerID: '',
                carID: '',
                driverId: '',
                pickUpDate: '',
                returnDate: '',
                pickUpLocation: '',
                status: '',
                note: ''
            },
            alert: false,
            message: '',
            severity: '',
    
            data: [
                     { id: 1, reserveId: 'R001',customerID: 'C001',carID: 'CR001',driverId: 'R001', pickUpDate: '2022-07-16', returnDate: '2022-07-17', pickUpLocation: 'Colombo', status: 'Confirmed', note: 'Have a good trip' },
                     { id: 2, reserveId: 'R002',customerID: 'C001',carID: 'CR001',driverId: 'R001', pickUpDate: '2022-07-16', returnDate: '2022-07-17', pickUpLocation: 'Colombo', status: 'Confirmed', note: 'Have a good trip' },
                     { id: 3, reserveId: 'R003',customerID: 'C001',carID: 'CR001',driverId: 'R001', pickUpDate: '2022-07-16', returnDate: '2022-07-17', pickUpLocation: 'Colombo', status: 'Confirmed', note: 'Have a good trip' },
                     { id: 4, reserveId: 'R004',customerID: 'C001',carID: 'CR001',driverId: 'R001', pickUpDate: '2022-07-16', returnDate: '2022-07-17', pickUpLocation: 'Colombo', status: 'Confirmed', note: 'Have a good trip' }     
                 ],

            loaded: true,

            // data: [],
            // loaded: false,

            columns: [
                
                {
                    field: 'reserveId',
                    headerName: 'Reserve Id',
                    width: 100,
                },
                {
                    field: 'customerID',
                    headerName: 'Customer ID',
                    width: 100,
                },
                {
                    field: 'carID',
                    headerName: 'Car ID',
                    width: 100,
                },
                {
                    field: 'driverId',
                    headerName: 'Driver Id',
                    width: 80,
                },
                {
                    field: 'pickUpDate',
                    headerName: 'PickUp Date',
                    width: 130
                },
                {
                    field: 'returnDate',
                    headerName: 'Return Date',
                    width: 130,
                },
                {
                    field: 'pickUpLocation',
                    headerName: 'Location',
                    width: 120
                },
                {
                    field: 'status',
                    headerName: 'Status',
                    width: 120
                },
                {
                    field: 'note',
                    headerName: 'Note',
                    width: 230
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
                            <div className={classes.lblcustomer}><span>Reservations</span></div> 
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

export default withStyles(styleSheet)(Reservation) 