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
import ReservationService from "../../services/ReservationService";
import SnackBar from "../../components/SnackBar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CustomerService from "../../services/CustomerService";


class Booking extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                reserveId: 'R002',
                pickUpDate: '', 
                returnDate: '',
                pickUpLocation: '',
                status: 'pending',
                customer: {
                    email: "sarath@gmail.com",
                    password: "",
                    name: "",
                    nic:"",
                    license:"",
                    address:"",
                    contact:"",
                },
                car: {
                    regId:"CR001",
                    brand:"",
                    type:"",
                    transType:"",
                    fuelType:"",
                    noPassengers:"",
                    dailyRate:"",
                    monthlyRate:"",
                    freeKmDay:"",
                    priceExKm:"",
                    status:""
                },

                driverId:'',
               
                rentalDetails:[{
                    rentalId:"R002",
                    rentalCharge:13500,
                    damageCharge:0,
                    additionalCharge:0,
                    duration:5,
                    totalCharge:13500
                }] 
            },
           
            alert: false,
            message: '',
            severity: '',
            data: []
            
        }
    }

    exampleForMap = () => {
        this.state.data.map((value, index) => {
            console.log(value)  
        })
    };

    loadData = async () => {
        let res = await CustomerService.fetchCustomer(); 

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }

        console.log(this.state.data)

        this.exampleForMap()
    };

    
    componentDidMount() {
        this.loadData();
    }

    clearFields = () => {
        this.setState({
            formData: {
                reserveId: 'R003',
                customerID: "sarath@gmail.com",
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



    render(){
        let { classes } = this.props

        return(
            <Fragment>
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
                        <ValidatorForm ref="form"  onError={errors => console.log(errors)}>
                                <Grid container style={{padding: '10px'}} spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >
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
                                           // value={this.state.formData.customerID.email}
                                            // onChange={(e) => {
                                            //     let formData = this.state.formData
                                            //     formData.customerID.email = e.target.value
                                            //     this.setState({ formData })
                                            // }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xm={6} >
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <Stack spacing={2}>
                                               <DatePicker
                                                    views={['day']}
                                                    label="PickUp Date"
                                                    value={this.state.formData.pickUpDate}
                                                    onChange={(newValue) => {
                                                        let formData = this.state.formData
                                                        formData.pickUpDate = newValue
                                                        this.setState({ formData })
                                                    }}
                                                    renderInput={(params) => <TextField {...params} helperText={null} />}
                                                />
                                            </Stack>
                                        </LocalizationProvider>
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xm={6} >
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <Stack spacing={2}>
                                               <DatePicker
                                                    views={['day']}
                                                    label="Return Date"
                                                    value={this.state.formData.returnDate}
                                                    onChange={(newValue) => {
                                                        let formData = this.state.formData
                                                        formData.returnDate = newValue
                                                        this.setState({ formData })
                                                    }}
                                                    renderInput={(params) => <TextField {...params} helperText={null} />}
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
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Driver</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={this.state.formData.driverId}
                                                    label="Driver"
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
                                    
                                    <Grid item lg={12} md={12} sm={12} xm={12}  style={{display: 'flex', justifyContent:"flex-end"}}  >
                                        <Stack spacing={1} direction="row">
                                            <Button variant="outlined" color="error">Cancel</Button>
                                            <Button variant="contained"  onClick={() => {
                                                this.submitReservation()
                                                }} type="submit">Book</Button>
                                            
                                        </Stack>
                                    </Grid>   
                                </Grid>
                            </ValidatorForm>
                    </div>
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
