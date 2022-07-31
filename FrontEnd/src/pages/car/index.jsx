import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Sidebar from "../../components/sidebar";
import AdminNavbar from "../../components/adminNavbar";
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DataTable from "../../components/dataTable";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CarService from "../../services/CarService";
import SubmitButton from '../../components/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SnackBar from "../../components/SnackBar";


class Car extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                regId: '',
                brand: '',
                type: '',
                transType: '',
                fuelType: '',
                noPassengers: '',
                dailyRate: '',
                monthlyRate: '',
                freeKmDay: '',
                priceExKm: '',
                status: ''
            },
            
            alert: false,
            message: '',
            severity: '',
    
            data: [],

            btnLabel: 'save',
            btnColor: 'success',

            
        }
    }


    deleteCar = async (regId) => {
        let params = {
            regId: regId
        }
         let res = await CarService.deleteCar(params);

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

    updateCar = (data) => {
         console.log(data)

         this.setState({ 
            btnLabel: 'update',
            btnColor: 'primary',
            formData: {
                regId: data.regId,
                brand: data.brand,
                type: data.type,
                transType: data.transType,
                fuelType: data.fuelType,
                noPassengers: data.noPassengers,
                dailyRate: data.dailyRate,
                monthlyRate: data.monthlyRate,
                freeKmDay: data.freeKmDay,
                priceExKm: data.priceExKm,
                status: data.status  
            }  
        });
    };

    clearFields = () => {
        this.setState({
            formData: {
                regId: '',
                brand: '',
                type: '',
                transType: '',
                fuelType: '',
                noPassengers: '',
                dailyRate: '',
                monthlyRate: '',
                freeKmDay: '',
                priceExKm: '',
                status:''
            }
        });
    };

 
    exampleForMap = () => {
        this.state.data.map((value, index) => {
            console.log(value)   // access element one by one
        })
    };

    loadData = async () => {
        let res = await CarService.fetchCar();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        } else {
            console.log("fetching error: " + res)
        }

        this.exampleForMap()
    };

    

    submitCar = async () => {
        let formData = this.state.formData;

        if(this.state.btnLabel === "save") {
            let res = await CarService.postCar(formData);

            console.log(res)    //print the promise
    
            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else {
            let res = await CarService.putCar(formData);
            if(res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }
    };


    componentDidMount() {
        this.loadData();
    }

    render(){
        let { classes } = this.props
        return(
            <Fragment>

                <div className={classes.container}>

                    <div className={classes.leftSide}>
                        <Sidebar />
                    </div>
                    
                    <div className={classes.center}>

                        <div className={classes.appBar}>
                            <AdminNavbar />
                        </div>

                        <div className={classes.boxes}>

                        <div className={classes.widgets}>
                            <ValidatorForm ref="form" onSubmit={this.submitCar} onError={errors => console.log(errors)}>
                                <Grid container className={classes.gridss} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                    <Grid item xs={2} sm={4} md={4} style={{ marginTop:'20px'}} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Registered Id"
                                            size="small"
                                            value={this.state.formData.regId}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.regId = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={4} style={{ marginTop:'20px'}} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Brand"
                                            size="small"
                                            value={this.state.formData.brand}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.brand = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={4} style={{ marginTop:'20px'}} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Type"
                                            size="small"
                                            value={this.state.formData.type}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.type = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={4} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Transmition Type"
                                            size="small"
                                            value={this.state.formData.transType}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.transType = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={4} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Fuel Type"
                                            size="small"
                                            value={this.state.formData.fuelType}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.fuelType = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={4} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="No of Passengers"
                                            size="small"
                                            value={this.state.formData.noPassengers}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.noPassengers = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={4} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Daily Rate"
                                            size="small"
                                            value={this.state.formData.dailyRate}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.dailyRate = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={4} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Monthly Rate"
                                            size="small"
                                            value={this.state.formData.monthlyRate}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.monthlyRate = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={4} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Free Km Day"
                                            size="small"
                                            value={this.state.formData.freeKmDay}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.freeKmDay = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={4} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Price For Extra Km"
                                            size="small"
                                            value={this.state.formData.priceExKm}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.priceExKm = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={4} >
                                    <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Status"
                                            size="small"
                                            value={this.state.formData.status}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.status = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={4} style={{display: 'flex'}} justifyContent="flex-end" >
                                        <Stack spacing={2} direction="row">
                                            <Button variant="outlined" color="error">Cancel</Button>
                                             <SubmitButton variant="contained" label={this.state.btnLabel} type="submit" color={this.state.btnColor} /> 
                                        </Stack>
                                    </Grid>   
                                </Grid>
                            </ValidatorForm>
                        </div>
                        </div>

                        <div className={classes.table}>
                            <div className={classes.cartable}>          
                       
                            <Grid container style={{ height: '100%', width: '100%', padding: '5px' }}>
                            <TableContainer component={Paper} sx={{maxHeight:'100%'}}>
                            <Table sx={{ minWidth: 650 }} aria-label="customer table">
                            <TableHead>
                                <TableRow style={{backgroundImage: 'linear-gradient(to right top, #777277, #766e7a, #736a7e, #6c6783, #626589)'}}>
                                    <TableCell align="left" style={{color:'white'}}> RegId</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Brand</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Type</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> TransType</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> FuelType</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Passengers</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> DailyRate</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> MonthlyRate</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> FreeKmDay</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> PriceExKm</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Status</TableCell>
                                    <TableCell align="left" style={{color:'white'}}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.regId}</TableCell>
                                            <TableCell align="left">{row.brand}</TableCell>
                                            <TableCell align="left">{row.type}</TableCell>
                                            <TableCell align="left">{row.transType}</TableCell>
                                            <TableCell align="left">{row.fuelType}</TableCell>
                                            <TableCell align="left">{row.noPassengers}</TableCell>
                                            <TableCell align="left">{row.dailyRate}</TableCell>
                                            <TableCell align="left">{row.monthlyRate}</TableCell>
                                            <TableCell align="left">{row.freeKmDay}</TableCell>
                                            <TableCell align="left">{row.priceExKm}</TableCell>
                                            <TableCell align="left">{row.status}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton 
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateCar(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteCar(row.regId)
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

                    <SnackBar
                        open={this.state.alert}
                        onClose={() => {
                            this.setState({ open: false })
                        }}
                        message={this.state.message}
                        autoHideDuration={3000}
                        severity={this.state.severity}
                        variant="filled"
                    />
                    
                </div>
             
            </Fragment>
           
        )

    }
}

export default withStyles(styleSheet)(Car) 