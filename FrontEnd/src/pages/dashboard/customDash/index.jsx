import {Component, Fragment} from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import CustomNavbar from "../../../components/customNavbar";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Login from "../../login";
import ReservationService from "../../../services/ReservationService";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


class CustomDash extends Component{

    constructor(props) {
        super(props);
        this.state = {
            // formData: {
            //     reserveId: '',
            //     pickUpDate: '', 
            //     returnDate: '',
            //     pickUpLocation: '',
            //     status: '',
            //     customerID: {
            //         email: "",
            //     },
            //     carID: {
            //         regId: "",
            //     },

            //     driverId:'',

               
            // },
            alert: false,
            message: '',
            severity: '',
    
            data: [],

        }

    }

    deleteReservation = async (reserveId) => {
        let params = {
            reserveId: reserveId
        }
         let res = await ReservationService.deleteRes(params);

         if(res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            this.loadData();
         } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
         }
    };

    exampleForMap = () => {
        this.state.data.map((value, index) => {
            console.log(value)   // access element one by one
        })
    };

    loadData = async () => {
        let res = await ReservationService.fetchRes();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        } else {
            console.log("fetching error: " + res)
        }

        this.exampleForMap()
    };

    componentDidMount() {
        this.loadData();
    }


   
    render(){
        let { classes } = this.props

        return(
            <Fragment >
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
                            <Grid container style={{ height: '100%', width: '100%', padding: '15px' }}>
                            <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="Reservation table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left"> Reserv Id</TableCell>
                                    <TableCell align="left"> Customer Id</TableCell>
                                    <TableCell align="left"> Car Id</TableCell>
                                    <TableCell align="left"> Driver Id</TableCell>
                                    <TableCell align="left"> PickUp Date</TableCell>
                                    <TableCell align="left"> Return Date</TableCell>
                                    <TableCell align="left"> PickUp Location</TableCell>
                                    <TableCell align="left"> Status</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.reserveId}</TableCell>
                                            <TableCell align="left">{row.customer.email}</TableCell>
                                            <TableCell align="left">{row.car.regId}</TableCell>
                                            <TableCell align="left">{row.driverId}</TableCell>
                                            <TableCell align="left">{row.pickUpDate}</TableCell>
                                            <TableCell align="left">{row.returnDate}</TableCell>
                                            <TableCell align="left">{row.pickUpLocation}</TableCell>
                                            <TableCell align="left">{row.status}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteReservation(row.reserveId)
                                                        }}
                                                    >
                                                        <DeleteIcon color="error" />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                        </TableContainer>
                        </Grid>
                         
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
