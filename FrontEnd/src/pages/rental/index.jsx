import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Sidebar from "../../components/sidebar";
import AdminNavbar from "../../components/adminNavbar";
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RentalService from "../../services/RentalService";
import ReportService from "../../services/ReportService";
import ReservationService from "../../services/ReservationService";
import "./rental.css";


class Rental extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                rentalId: '',
                payDate: '',
                rentalCharge: '',
                damageCharge: 0,
                additionalCharge: 0,
                totalCharge: ''
            },

            duration: '',
            alert: false,
            message: '',
            severity: '',

            data: [],
        }
    }


    updateRental = (data) => {
        console.log(data)
        this.setState({
            formData: {
                rentalId: data.rentalId,
                rentalCharge: data.rentalCharge,
                damageCharge: data.damageCharge,
                additionalCharge: data.additionalCharge,
                totalCharge: data.totalCharge,
            },
            duration: data.duration
        });
    };


    clearFields = () => {
        this.setState({
            formData: {
                damageCharge: '',
                additionalCharge: '',
                rentalId: '',
                rentalCharge: '',
                totalCharge: ''
            }
        });
    };


    loadData = async () => {
        let res = await RentalService.fetchRent();
        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        } else {
            console.log("fetching error: " + res)
        }
    };


    deleteReservation = async () => {
        let params = {
            reserveId: this.state.formData.rentalId
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


    submitRental = async () => {
        let formData = this.state.formData;
        let res = await ReportService.postReport(formData);
        console.log(res)

        if (res.status === 201) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            this.deleteReservation();
            this.clearFields();
            this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    };

    componentDidMount() {
        this.loadData();
    }

    calculateTotal() {
        console.log("calculate function calling");
        this.setState({
            formData: {
                rentalId: this.state.formData.rentalId,
                rentalCharge: this.state.formData.rentalCharge,
                totalCharge: (+this.state.formData.rentalCharge) * (+this.state.duration) + (+this.state.formData.additionalCharge) + (+this.state.formData.damageCharge),
                additionalCharge: this.state.formData.additionalCharge,
                damageCharge: this.state.formData.damageCharge
            }
        });
    }


    render() {
        let { classes } = this.props

        return (
            <Fragment>
                <div className={classes.container}>
                    <div className="leftSide6">
                        <Sidebar />
                    </div>
                    <div className="center6">
                        <div className={classes.appBar}>
                            <AdminNavbar />
                        </div>
                        <div className={classes.boxes}>
                            <div className={classes.widgets}>

                                <div className={classes.lblcustomer}><span>Rental Details</span></div>
                                <hr className={classes.hr} />

                                <ValidatorForm ref="form" onSubmit={this.submitRental} onError={errors => console.log(errors)}>
                                    <Grid container className={classes.gridss} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                        <Grid item lg={6} md={6} sm={12} xm={12} style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', }} spacing={{ xs: 2, md: 3 }}>
                                            <Grid item lg={3.5} md={3.5} sm={12} xm={12} style={{ width: '100%' }} >
                                                <TextValidator
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    placeholder="Pickup Date"
                                                    size="small"
                                                    type="date"
                                                    value={this.state.formData.payDate}
                                                    onChange={(e) => {
                                                        let formData = this.state.formData
                                                        formData.payDate = e.target.value
                                                        this.setState({ formData })
                                                    }}
                                                    style={{ width: '100%' }}
                                                    validators={['required',]}
                                                />
                                            </Grid>
                                            <Grid item lg={3.5} md={3.5} sm={12} xm={12} style={{ width: '100%' }} >
                                                <TextValidator
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    label="Rental Id"
                                                    size="small"
                                                    value={this.state.formData.rentalId}
                                                    onChange={(e) => {
                                                        let formData = this.state.formData
                                                        formData.rentalId = e.target.value
                                                        this.setState({ formData })
                                                    }}
                                                    style={{ width: '100%', }}
                                                    validators={['required',]}
                                                />
                                            </Grid>
                                            <Grid item lg={3.5} md={3.5} sm={12} xm={12} style={{ width: '100%' }} >
                                                <TextValidator
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    label="Duration"
                                                    size="small"
                                                    value={this.state.duration}
                                                    onChange={(e) => {
                                                        let formData = this.state
                                                        formData.duration = e.target.value
                                                        this.setState({ formData })
                                                    }}
                                                    style={{ width: '100%', }}
                                                    validators={['required',]}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xm={12} style={{ marginTop: '10px' }}   >
                                            <TextValidator
                                                id="outlined-basic"
                                                variant="outlined"
                                                label="Rental Charge"
                                                size="small"
                                                value={this.state.formData.rentalCharge}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.rentalCharge = e.target.value
                                                    this.setState({ formData })
                                                }}
                                                style={{ width: '100%' }}
                                                validators={['required',]}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xm={12}  >
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
                                        <Grid item lg={6} md={6} sm={12} xm={12} >
                                            <TextValidator
                                                id="outlined-basic"
                                                variant="outlined"
                                                label="Total Charge"
                                                size="small"
                                                value={this.state.formData.totalCharge}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.totalCharge = e.target.value
                                                    this.setState({ formData })
                                                }}
                                                style={{ width: '100%' }}
                                                validators={['required',]}
                                            />
                                        </Grid>

                                        <Grid item lg={6} md={6} sm={12} xm={12} >
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
                                        <Grid item lg={6} md={6} sm={12} xm={12} style={{ display: 'flex', justifyContent: "flex-end" }}  >
                                            <Stack spacing={1} direction="row">
                                                <Button variant="outlined"
                                                    onClick={() => {
                                                        console.log('Calculate button clicked!')
                                                        this.calculateTotal()
                                                    }}>Calculate
                                                </Button>
                                                <Button variant="outlined" color="error">Cancel</Button>
                                                <Button variant="contained" type="submit">Pay</Button>

                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </ValidatorForm>
                            </div>
                        </div>

                        <div className={classes.table}>
                            <div className={classes.cartable}>
                                <Grid container style={{ height: '100%', width: '100%', padding: '5px' }}>
                                    <TableContainer component={Paper} sx={{ maxHeight: '100%', height: '45vh' }}>
                                        <Table sx={{ minWidth: 650 }} aria-label="Category table">
                                            <TableHead>
                                                <TableRow style={{ backgroundImage: 'linear-gradient(to right top, #777277, #766e7a, #736a7e, #6c6783, #626589)' }}>
                                                    <TableCell align="left" style={{ color: 'white' }}> Rental Id</TableCell>
                                                    <TableCell align="left" style={{ color: 'white' }}> Daily Rate</TableCell>
                                                    <TableCell align="left" style={{ color: 'white' }}> Duration</TableCell>
                                                    <TableCell align="left" style={{ color: 'white' }}> Refund</TableCell>
                                                    <TableCell align="left" style={{ color: 'white' }}>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    this.state.data.map((row) => (
                                                        <TableRow>
                                                            <TableCell align="left">{row.rentalId}</TableCell>
                                                            <TableCell align="left">{row.rentalCharge}</TableCell>
                                                            <TableCell align="left">{row.duration + ' days'}</TableCell>
                                                            <TableCell align="left">{row.totalCharge}</TableCell>
                                                            <TableCell align="left">
                                                                <Tooltip title="Edit">
                                                                    <IconButton
                                                                        onClick={() => {
                                                                            console.log("edit icon clicked!")
                                                                            this.updateRental(row);
                                                                        }}
                                                                    >
                                                                        <EditIcon color="primary" />
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

export default withStyles(styleSheet)(Rental)