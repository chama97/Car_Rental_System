import {Component, Fragment} from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import CustomNavbar from "../../components/customNavbar";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SuzukiAlto from '../../assets/img/General Cars/Suzuki Alto - Premium/suzuki-alto.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Autocomplete from '@mui/material/Autocomplete';
import ReservationService from "../../services/ReservationService";

class Booking extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                reserveId: 'R002',
                pickUpDate: new Date() , 
                returnDate: new Date(),
                pickUpLocation: '',
                note:'dd',
                status: 'pending',
                customerID: {email: 'Customer A', address: 'Address B', number: '123456789'},
                carID: {carData : this.carData},
                driverId: 'driverData',
                rentalData:'rentalData'
                
            },

           
            carData: {
                regId: 'CR001',
                brand: '',
                type: '',
                transType: '',
                fuelType: '',
                noPassengers: '',
                dailyRate: '',
                monthlyRate: '',
                freeKmDay: '',
                priceExKm: '',
                status: 'Available'
            },

            customerData: {
                email: 'anura@gmail.com',
                password: '',
                name: '',
                nic: '',
                license: '',
                address: '',
                contact: 78765678
            },

            driverData: {
                email: 'amal@gmail.com',
                password: '',
                name: '',
                nic: '',
                license: '',
                address: '',
                contact: 783782678
            },

            rentalData:[
                {
                    rentalId:'R002',
                    rentalCharge:0,
                    damageCharge:0,
                    additionalCharge:0,
                    duration:0,
                    totalCharge:0
                }
            ],


            alert: false,
            message: '',
            severity: '',

            setDriver: [
                { label: 'Yes' },
                { label: 'No' },
            ], 
            
            data: [],
            
        }

    }

    handleChange(date) {
        this.setState({
            pickUpDate: date
        })
      }

      clearFields = () => {
        this.setState({
            formData: {
                reserveId: 'R003',
                customerID: '',
                carID: 'CR001',
                driverId: '',
                pickUpDate:  '', 
                returnDate: '',
                pickUpLocation: '',
            }
        });
    };

    submitReservation= async () => {
        let formData = this.state.formData;
        let res = await ReservationService.postRes(formData);

        console.log(res)    //print the promise
    
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

    componentDidMount() {
        this.loadData();
    }


    render(){
        let { classes } = this.props

        return(
            <Fragment className={classes.container}>
                <div><CustomNavbar /></div>
                <div className={classes.board}>
                    <div className={classes.profile}>
                        <div className={classes.lblprofile}><span>Car Details</span></div> 
                        <hr className={classes.hr} /> 
                        
                        <Card  className={classes.divs}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="320"
                                    imag src={SuzukiAlto}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Suzuki Alto - Premium
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <span>Auto | Petrol</span><br/>
                                        <span>Passengers - <span> 4</span> </span><br/>
                                        <span>FreeKm/Day - <span> 100Km</span>  </span><br/>
                                        <span>Price/ExtraKm - <span> 30.0</span> </span><br/>
                                        <span>Daily Rate - <span> Rs:2500</span>  </span><br/>
                                        <span>Monthly Rate - <span> Rs:64,350</span> </span><br/>
                                        <span>Status - <span> Available</span> </span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                    <div className={classes.mybook}>
                        <div className={classes.lblprofile}><span>Booking Details</span></div> 
                        <hr className={classes.hr} /> 
                        <ValidatorForm ref="form" onSubmit={this.submitReservation} onError={errors => console.log(errors)}>
                                <Grid container style={{padding: '10px'}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                    
                                <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
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
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Customer ID"
                                            size="small"
                                            value={this.state.formData.customerID}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.customerID = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xm={6} >
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack>
                                            <DatePicker
                                                label="PickUp Date"
                                                value={this.state.formData.pickUpDate}
                                                // onChange={(e) => {
                                                //     let formData = this.state.formData
                                                //     formData.pickUpDate = e.target.value
                                                //     this.setState({ formData })
                                                // }}
                                                onChange={(e) => {  
                                                    this.setState({pickUpDate: e})
                                                 }}
                                                style={{ width: '100%' }}
                                                validators={['required',]}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </Stack>
                                        </LocalizationProvider>
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xm={6} >
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack >
                                            <DatePicker
                                                label="Return Date"
                                                value={this.state.formData.returnDate}
                                                // onChange={(e) => {
                                                //     let formData = this.state.formData
                                                //     formData.returnDate = e.target.value
                                                //     this.setState({ returnDate: e })
                                                // }}
                                                onChange={(e) => {  
                                                    this.setState({returnDate: e})
                                                 }}
                                                style={{ width: '100%' }}
                                                validators={['required',]}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </Stack>
                                        </LocalizationProvider>
                                        
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xm={6} >
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

                                    <Grid item lg={6} md={6} sm={6} xm={6} >
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={this.state.setDriver}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Driver" />}
                                            // value={this.state.setDriver}
                                            onChange={(e, value) => {
                                                let formData = this.state.setDriver
                                                formData.driverId = e.target.value
                                                this.setState({ formData })
                                            }}
                                            size="small"
                                            style={{ width: '100%' }}
                                            
                                        />
                                    </Grid>
                                    
                                    <Grid item lg={12} md={12} sm={12} xm={12}  style={{display: 'flex', justifyContent:"flex-end"}}  >
                                        <Stack spacing={1} direction="row">
                                            <Button variant="outlined" color="error">Cancel</Button>
                                            <Button variant="contained" type="submit">Book</Button>
                                            
                                        </Stack>
                                    </Grid>   
                                </Grid>
                            </ValidatorForm>
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

export default withStyles(styleSheet)(Booking) 
