import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import CustomNavbar from "../../components/customNavbar";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ReservationService from "../../services/ReservationService";
import SnackBar from "../../components/SnackBar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import localStorageService from "../../services/StorageService";
import Bottom from "../../components/bottom/Bottom";
// import { format } from "date-fns";

// let { route } = this.props

class Booking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                reserveId: '',
                pickUpDate: '',
                returnDate: '',
                pickUpLocation: '',
                status: '',
                customer: {
                    email: '',
                    password: '',
                    name: '',
                    nic: '',
                    license: '',
                    address: '',
                    contact: '',
                },
                car: {
                    regId: "",
                    brand: "",
                    type: "",
                    transType: "",
                    fuelType: "",
                    noPassengers: "",
                    dailyRate: "",
                    monthlyRate: "",
                    freeKmDay: "",
                    priceExKm: "",
                    status: ""
                },

                driverId: '',

                rentalDetails: [{
                    rentalId: '',
                    rentalCharge: '',
                    damageCharge: 0,
                    additionalCharge: 0,
                    duration: '',
                    totalCharge: 0
                }]
            },

            alert: false,
            message: '',
            severity: '',
            data: [],
            carData: [{
                id: "",
                brand: "",
                img: "",
                passengers: "",
                dailyRate: 0,
                monthlyRate: "",
                freeKmDay: "",
                priceExKm: "",
            }],

            userData: "",
        }
    }

    exampleForMap = () => {
        this.state.data.map((value) => {
            console.log(value)
            return (value);
        })
    };

    dateDifference= () => {
        var date1 = new Date(this.state.formData.pickUpDate);
        var date2 = new Date(this.state.formData.returnDate);
        var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
        return diffDays+' days';
    };


    loadIdData = async () => {
        let res = await ReservationService.fetchResId();
        let rentalCharge = this.state.carData.dailyRate;

        if (res.status === 200) {
            this.setState({
                formData: {
                    reserveId: res.data.data,
                    status: 'pending',
                    customer: { email: this.state.userData },
                    car: { regId: this.state.carData.id },
                    rentalDetails: [{
                        rentalId: res.data.data,
                        rentalCharge: rentalCharge,
                        duration: this.dateDifference(),
                        additionalCharge: 0.0
                    }]
                }
            });
        }
        console.log(this.state.data)
        this.exampleForMap()
    };


    componentDidMount = async () => {
        this.loadIdData()

        const token = await localStorageService.getItem("carToken");
        if (token) {
            console.log(token);
            this.setState({
                carData: {
                    id: token.id,
                    brand: token.brand,
                    img: token.img,
                    passengers: token.passenger,
                    dailyRate: token.dailyRate,
                    monthlyRate: token.monthlyRate,
                    freeKmDay: token.freeKm,
                    priceExKm: token.priceExKm,
                }
            })
        }

        const userToken = await localStorageService.getItem("userToken");
        if (userToken) {
            console.log(userToken);
            this.setState({
                userData: userToken
            })
        }
    }


    clearFields = () => {
        this.setState({
            formData: {
                reserveId: '',
                customerID: '',
                carID: '',
                driverId: '',
                pickUpDate: '',
                returnDate: '',
                pickUpLocation: '',
            }
        });
    };

    submitReservation = async () => {
        let formData = this.state.formData;
        let res = await ReservationService.postRes(formData);
        console.log(res)

        if (res.status === 201) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            this.clearFields();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    };

    cancelBook = () => {
        localStorage.removeItem('carToken');
        window.location.href = '/generalcar';
    }


    render() {
        let { classes } = this.props

        return (
            <Fragment>
                <div><CustomNavbar /></div>
                <div className={classes.board}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }} style={{ padding: '20px' }} >
                        <Grid item lg={6} md={6} sm={12} xm={12}  >
                            <div className={classes.profile}>
                                <div className={classes.lblprofile}><span>Car Details</span></div>
                                <hr className={classes.hr} />
                                <Card className={classes.divs}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="320"
                                            imag src={this.state.carData.img}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {this.state.carData.brand}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" style={{display:'flex',flexDirection:'row',marginTop:'20px'}}>
                                                <div style={{display:'flex',flexDirection:'column',width:'170px'}}>
                                                    <span>Auto | Petrol</span>
                                                    <hr className={classes.hrr} />
                                                    <span>Passengers - </span>
                                                    <hr className={classes.hrr} />
                                                    <span>FreeKm/Day - </span>
                                                    <hr className={classes.hrr} />
                                                    <span>Price/ExtraKm - </span>
                                                    <hr className={classes.hrr} />
                                                    <span>Daily Rate - </span>
                                                    <hr className={classes.hrr} />
                                                    <span>Monthly Rate - </span>
                                                    <hr className={classes.hrr} />
                                                    <span>Status - </span>
                                                    <hr className={classes.hrr} />
                                                </div>
                                                <div style={{display:'flex',flexDirection:'column',width:'80%'}}>
                                                    <span>.</span>
                                                    <hr className={classes.hrr} />
                                                    <span>{this.state.carData.passengers}</span>
                                                    <hr className={classes.hrr} />
                                                    <span> {this.state.carData.freeKmDay}</span>
                                                    <hr className={classes.hrr} />
                                                    <span> {this.state.carData.priceExKm}</span>
                                                    <hr className={classes.hrr} />
                                                    <span> {this.state.carData.dailyRate}</span>
                                                    <hr className={classes.hrr} />
                                                    <span> {this.state.carData.monthlyRate}</span>
                                                    <hr className={classes.hrr} />
                                                    <span> Available</span>
                                                    <hr className={classes.hrr} />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xm={12}  >
                            <div className={classes.mybook}>
                                <div className={classes.lblprofile}><span>Booking Details</span></div>
                                <hr className={classes.hr} />
                                <ValidatorForm ref="form" onError={errors => console.log(errors)}>
                                    <Grid container style={{ padding: '20px', paddingTop: '30px' }} spacing={{ xs: 3, md: 4 }} columns={{ xs: 12, sm: 12, md: 12 }} >
                                        <Grid item lg={6} md={6} sm={12} xm={12} >
                                            <TextValidator
                                                id="outlined-basic"
                                                variant="outlined"
                                                label="Reservation ID"
                                                size="small"
                                                value={this.state.formData.reserveId}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.reserveId = e.target.value
                                                    this.setState({ formData })
                                                }}
                                                style={{ width: '100%', fontWeight: 'bold', color: 'green' }}
                                                validators={['required',]}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xm={12} >
                                            <TextValidator
                                                id="outlined-basic"
                                                variant="outlined"
                                                label="Car ID"
                                                placeholder="Car ID"
                                                size="small"
                                                value={this.state.carData.id}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.car.regId = e.target.value
                                                    this.setState({ formData })
                                                }}
                                                style={{ width: '100%', fontWeight: 'bold', color: 'red' }}
                                                validators={['required',]}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xm={12} >

                                            <Typography variant="subtitle1" style={{ fontSize: '15px' }}>Pickup Date</Typography>
                                            <TextValidator
                                                id="outlined-basic"
                                                variant="outlined"
                                                placeholder="Pickup Date"
                                                size="small"
                                                type="date"
                                                value={this.state.formData.pickUpDate}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.pickUpDate = e.target.value
                                                    this.setState({ formData })
                                                    console.log(formData.pickUpDate)
                                                }}
                                                style={{ width: '100%' }}
                                                validators={['required',]}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xm={12} >
                                            <Typography variant="subtitle1" style={{ fontSize: '15px' }}>Return Date</Typography>
                                            <TextValidator
                                                id="outlined-basic"
                                                variant="outlined"
                                                placeholder="Return Date"
                                                size="small"
                                                type="date"
                                                value={this.state.formData.returnDate}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.returnDate = e.target.value
                                                    this.setState({ formData })
                                                    console.log(formData.returnDate)
                                                }}
                                                style={{ width: '100%' }}
                                                validators={['required',]}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xm={12} >
                                            <TextValidator
                                                id="outlined-basic"
                                                variant="outlined"
                                                label="PickUp Location"
                                                size="small"
                                                value={this.state.formData.pickUpLocation}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.pickUpLocation = e.target.value
                                                    this.setState({ formData })
                                                }}
                                                style={{ width: '100%' }}
                                                validators={['required',]}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xm={12} >
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Driver</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={this.state.formData.driverId}
                                                    label="Driver"
                                                    size="small"
                                                    onChange={(e) => {
                                                        let formData = this.state.formData
                                                        formData.driverId = e.target.value
                                                        console.log(formData.driverId)
                                                        this.setState({ formData })
                                                    }}
                                                >
                                                    <MenuItem value={true}>Yes</MenuItem>
                                                    <MenuItem value={false}>No</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item lg={12} md={12} sm={12} xm={12} style={{ display: 'flex', justifyContent: "flex-end" }}  >
                                            <Stack spacing={1} direction="row">
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                    onClick={() => {
                                                        this.cancelBook()
                                                    }}>Cancel
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    type="submit"
                                                    onClick={() => {
                                                        this.submitReservation()
                                                    }}>Book
                                                </Button>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </ValidatorForm>
                            </div>
                        </Grid>
                    </Grid>
                    <SnackBar
                        open={this.state.alert}
                        onClose={() => {
                            this.setState({ alert: false })
                        }}
                        message={this.state.message}
                        autoHideDuration={3000}
                        severity={this.state.severity}
                        variant="filled"
                    />
                </div>
                <Bottom />
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(Booking)
