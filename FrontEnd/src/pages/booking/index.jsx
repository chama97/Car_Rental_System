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

class Booking extends Component{

    constructor(props) {
        super(props);
        this.state = {
            
            formData: {
                reserveId: '',
                customerID: '',
                carID: '',
                driverId: '',
                pickUpDate: new Date()  , 
                returnDate: '',
                pickUpLocation: '',
                status: '',
                
            },
            

            alert: false,
            message: '',
            severity: '',

            setDriver: [
                { label: 'Yes' },
                { label: 'No' },
            ], 
            
            // data: [],
            // loaded: false, 

        }
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
                        <ValidatorForm ref="form" onSubmit={this.handleSubmit} onError={errors => console.log(errors)}>
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
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.pickUpDate = e.target.value
                                                    this.setState({ formData })
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
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.returnDate = e.target.value
                                                    this.setState({ formData })
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
                                            <Button variant="contained">Book</Button>
                                            
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
