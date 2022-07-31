import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Sidebar from "../../components/sidebar";
import AdminNavbar from "../../components/adminNavbar";
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

class Rental extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                rentalId: '',
                payDate: new Date(),
                rentalCharge: '',
                damageCharge: 0,
                additionalCharge: 0,
                totalCharge: '' 
            },
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
                totalCharge: data.totalCharge ,
           }  
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
        this.exampleForMap()
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
                totalCharge : (+this.state.formData.totalCharge) + (+this.state.formData.additionalCharge) + (+this.state.formData.damageCharge),
                additionalCharge: this.state.formData.additionalCharge,
                damageCharge: this.state.formData.damageCharge
            }
        });
    }

   
    render(){
        let { classes } = this.props
        const totalCharge = 0;
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

                            <div className={classes.lblcustomer}><span>Rental Details</span></div> 
                            <hr className={classes.hr} /> 

                            <ValidatorForm ref="form" onSubmit={this.submitRental} onError={errors => console.log(errors)}>
                                <Grid container className={classes.gridss} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'10px'}} >
                                    <Stack spacing={3} direction="row" style={{ width: '100%' }}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                label="Pay Date"
                                                size="small"
                                                value={this.state.formData.payDate}
                                                onChange={(newValue) => {
                                                    let formData = this.state.formData
                                                    formData.payDate = newValue
                                                    this.setState({ formData })
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                        
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
                                            style={{ width: '100%',}}
                                            validators={['required',]}
                                        />
                                        </Stack>
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xm={6} style={{ marginTop:'10px'}}   >
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

                                    <Grid item lg={6} md={6} sm={6} xm={6}  >
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

                                    <Grid item lg={6} md={6} sm={6} xm={6} >
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

                                    <Grid item lg={6} md={6} sm={6} xm={6} >
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

                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{display: 'flex', justifyContent:"flex-end"}}  >
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
                                    <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="Category table">
                            <TableHead>
                                <TableRow style={{backgroundImage: 'linear-gradient(to right top, #777277, #766e7a, #736a7e, #6c6783, #626589)'}}>
                                    <TableCell align="left" style={{color:'white'}}> Rental Id</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Rental Charge</TableCell>
                                    {/* <TableCell align="left"> Damage Charge</TableCell> */}
                                    {/* <TableCell align="left"> Additional Charge</TableCell> */}
                                    <TableCell align="left" style={{color:'white'}}> Duration</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Total Charge</TableCell>
                                    <TableCell align="left" style={{color:'white'}}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.rentalId}</TableCell>
                                            <TableCell align="left">{row.rentalCharge}</TableCell>
                                            {/* <TableCell align="left">{row.damageCharge}</TableCell> */}
                                            {/* <TableCell align="left">{row.additionalCharge}</TableCell> */}
                                            <TableCell align="left">{row.duration}</TableCell>
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