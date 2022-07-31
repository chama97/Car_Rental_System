import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Sidebar from "../../components/sidebar";
import AdminNavbar from "../../components/adminNavbar";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import ReservationService from "../../services/ReservationService";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class Reservation extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                reserveId: '',
                pickUpDate: '', 
                returnDate: '',
                pickUpLocation: '',
                status: '',
                customerID: {
                    email: "",
                },
                carID: {
                    regId: "",
                },

                driverId:'',

            },
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
        } 
            
        console.log(res.data.data)
     
        this.exampleForMap()
    };

    componentDidMount() {
        this.loadData();
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
                                <Grid container style={{ height: '100%', width: '100%', padding: '15px' }}>
                                    <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="Reservation table">
                            <TableHead>
                                <TableRow style={{backgroundImage: 'linear-gradient(to right top, #777277, #766e7a, #736a7e, #6c6783, #626589)'}}>
                                    <TableCell align="left" style={{color:'white'}}> Reserv Id</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Customer Id</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Car Id</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Driver Id</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> PickUp Date</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Return Date</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> PickUp Location</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Status</TableCell>
                                    <TableCell align="left" style={{color:'white'}}>Action</TableCell>
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

                    </div>
                    
                </div>
             
            </Fragment>
           
        )

    }
}

export default withStyles(styleSheet)(Reservation) 