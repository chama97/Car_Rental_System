import {Component, Fragment} from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import CustomNavbar from "../../../components/customNavbar";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DataTable from "../../../components/dataTable";


class CustomDash extends Component{

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
                <div><CustomNavbar /></div>
                <div className={classes.board}>
                    <div className={classes.profile}>
                        <div className={classes.lblprofile}><span>My profile</span></div> 
                        <hr className={classes.hr} /> 
                        <Grid container style={{ padding:'10px'}} spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="E-mail :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Amal@gmail.com"/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Password :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="12345"/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Name :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Amal"/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="NIC :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="23467854V"/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="License :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="245447554"/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Address :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Colombo"/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Contact :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="0928374637"/>
                            </Grid>
                    </Grid> 
                    </div>

                    <div className={classes.mybook}>
                        <div className={classes.lblprofile}><span>My Bookings</span></div> 
                        <hr className={classes.hr} /> 

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

                <div className={classes.containerBottom}>
                    <span className={classes.bottomSpan}>
                        Copyright @ 2022 Easy Car Rental
                    </span>
                </div>
    
            </Fragment>  
        )

    }

}

export default withStyles(styleSheet)(CustomDash) 
