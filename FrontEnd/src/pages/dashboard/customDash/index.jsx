import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import CustomNavbar from "../../../components/customNavbar";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ReservationService from "../../../services/ReservationService";
import CustomerService from "../../../services/CustomerService";
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
import Bottom from "../../../components/bottom/Bottom";
import './cust.css'
import localStorageService from "../../../services/StorageService";
import EditIcon from '@mui/icons-material/Edit';


class CustomDash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerData: [{
                email: '',
                password: '',
                name: '',
                nic: '',
                license: '',
                address: '',
                contact: ''
            }],

            userData: "",

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
        if (res.status === 200) {
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


    loadData = async () => {
        let res = await ReservationService.fetchRes();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        } else {
            console.log("fetching error: " + res)
        }
    };


    geCustomerById = async (email) => {
        let res = await CustomerService.getCustomerById(email);
        if (res.status === 200) {
            this.setState({
                customerData: {
                    email: res.data.data.email,
                    password: res.data.data.password,
                    name: res.data.data.name,
                    nic: res.data.data.nic,
                    license: res.data.data.license,
                    address: res.data.data.address,
                    contact: res.data.data.contact
                },
            });
            console.log(res.data.data)
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };

    componentDidMount = async () => {
        const token = await localStorageService.getItem("userToken");
        if (token) {
            console.log(token);
            this.setState({
                userData: token
            })
        }

        this.geCustomerById(token);
        this.loadData();
    }


    updateCustomer = async () => {
        let formData = this.state.customerData;
        let res = await CustomerService.putCustomer(formData);
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success',
            });
            window.alert("Successfully Updated");
            this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    };


    render() {
        let { classes } = this.props

        return (
            <Fragment >
                <div><CustomNavbar /></div>
                <div className={classes.board}>
                    <div className="profile-top"></div>
                    <div className="photo"></div>
                    <div className={classes.lblprofile}><span>{this.state.customerData.name}</span></div>
                    <div className={classes.profile}>
                        <div style={{ width: '96%', display: 'flex', justifyContent: 'flex-end', marginTop: '7px' }}>
                            <div className="btnIcon">
                                <IconButton onClick={() => {
                                    this.updateCustomer(this.state.customerData)
                                }}
                                >
                                    <EditIcon style={{ fontSize: '30px' }} />
                                </IconButton>
                            </div>
                        </div>
                        <Grid container style={{ padding: '10px', width: '100%' }} spacing={{ xs: 1, md: 1 }} columns={{ xs: 6, sm: 12, md: 12 }} >
                            <Grid item lg={6} md={6} sm={6} xm={12}  >
                                <TextField id="outlined-basic" style={{ width: '100%' }} defaultValue="E-mail :" InputProps={{ readOnly: true, }} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={12}  >
                                <TextField id="outlined-basic" style={{ width: '100%' }} value={this.state.userData}  InputProps={{ readOnly: true, }}/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={12} >
                                <TextField id="outlined-basic" style={{ width: '100%' }} defaultValue="Password :" />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={12} >
                                <TextField id="outlined-basic" style={{ width: '100%' }}
                                    value={this.state.customerData.password}
                                    onChange={(e) => {
                                        let customerData = this.state.customerData
                                        customerData.password = e.target.value
                                        this.setState({ customerData })
                                    }}
                                />
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={12} >
                                <TextField id="outlined-basic" style={{ width: '100%' }} defaultValue="Name :" />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={12} >
                                <TextField id="outlined-basic" style={{ width: '100%' }}
                                    value={this.state.customerData.name}
                                    onChange={(e) => {
                                        let customerData = this.state.customerData
                                        customerData.name = e.target.value
                                        this.setState({ customerData })
                                    }}
                                />
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={12} >
                                <TextField id="outlined-basic" style={{ width: '100%' }} defaultValue="NIC :" />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={12} >
                                <TextField id="outlined-basic" style={{ width: '100%' }}
                                    value={this.state.customerData.nic}
                                    onChange={(e) => {
                                        let customerData = this.state.customerData
                                        customerData.nic = e.target.value
                                        this.setState({ customerData })
                                    }}
                                />
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={12} >
                                <TextField id="outlined-basic" style={{ width: '100%' }} defaultValue="License :" />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={12} >
                                <TextField id="outlined-basic" style={{ width: '100%' }}
                                    value={this.state.customerData.license}
                                    onChange={(e) => {
                                        let customerData = this.state.customerData
                                        customerData.license = e.target.value
                                        this.setState({ customerData })
                                    }}
                                />
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={12} >
                                <TextField id="outlined-basic" style={{ width: '100%' }} defaultValue="Address :" />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={12} >
                                <TextField id="outlined-basic" style={{ width: '100%' }}
                                    value={this.state.customerData.address}
                                    onChange={(e) => {
                                        let customerData = this.state.customerData
                                        customerData.address = e.target.value
                                        this.setState({ customerData })
                                    }}
                                />
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={12} >
                                <TextField id="outlined-basic" style={{ width: '100%' }} defaultValue="Contact :" />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={12} >
                                <TextField id="outlined-basic" style={{ width: '100%' }}
                                    value={this.state.customerData.contact}
                                    onChange={(e) => {
                                        let customerData = this.state.customerData
                                        customerData.contact = e.target.value
                                        this.setState({ customerData })
                                    }}
                                />
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
                <Bottom />
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(CustomDash)
