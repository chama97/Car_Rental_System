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
    
            data: [
                     { id: 1, regId: 'C001', brand: 'Toyota', type: 'Genaral', transType: 'Auto', fuelType: 'Petrol', noPassengers: 5, dailyRate: 2000, monthlyRate: 50000, freeKmDay: '50Km', priceExKm: 20, status: 'Available' },
                     { id: 2, regId: 'C002', brand: 'Toyota', type: 'Genaral', transType: 'Auto', fuelType: 'Petrol', noPassengers: 5, dailyRate: 2000, monthlyRate: 50000, freeKmDay: '50Km', priceExKm: 20, status: 'Available' },
                     { id: 3, regId: 'C003', brand: 'Toyota', type: 'Genaral', transType: 'Auto', fuelType: 'Petrol', noPassengers: 5, dailyRate: 2000, monthlyRate: 50000, freeKmDay: '50Km', priceExKm: 20, status: 'Available' },
                     { id: 4, regId: 'C004', brand: 'Toyota', type: 'Genaral', transType: 'Auto', fuelType: 'Petrol', noPassengers: 5, dailyRate: 2000, monthlyRate: 50000, freeKmDay: '50Km', priceExKm: 20, status: 'Available' },
                 ],

            loaded: true,

            // data: [],
            // loaded: false,

            columns: [
                
                {
                    field: 'regId',
                    headerName: 'reg Id',
                    width: 70,
                    style: {
                        background: "green",
                      },
                },
                {
                    field: 'brand',
                    headerName: 'brand',
                    width: 130
                },
                {
                    field: 'type',
                    headerName: 'Car type',
                    width: 130,
                    //sortable: false
                },
                {
                    field: 'transType',
                    headerName: 'Transmition',
                    width: 100
                },
                {
                    field: 'fuelType',
                    headerName: 'Fuel Type',
                    width: 100
                },
                {
                    field: 'noPassengers',
                    headerName: 'Passengers',
                    width: 100
                },
                {
                    field: 'dailyRate',
                    headerName: 'DailyRate',
                    width: 100
                },
                {
                    field: 'monthlyRate',
                    headerName: 'MonthlyRate',
                    width: 100
                },
                {
                    field: 'freeKmDay',
                    headerName: 'FreeKm Day',
                    width: 100
                },
                {
                    field: 'priceExKm',
                    headerName: 'Price/ExKm',
                    width: 110
                },
                {
                    field: 'status',
                    headerName: 'Status',
                    width: 120
                },
                {
                    field: "action",
                    headerName: "Action",
                    width: 120,
                    renderCell: () => {
                      return (
                        <div>
                        <Tooltip title="Edit">
                            <IconButton 
                                onClick={() => {
                                    console.log("edit icon clicked!")
                                    //this.updateCustomer(row);
                                }}
                                >
                                <EditIcon color="primary" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton
                                onClick={() => {
                                    console.log("edit icon clicked!")
                                    //this.deleteCustomer(row.id)
                                }}
                                >
                                <DeleteIcon color="error" />
                            </IconButton>
                        </Tooltip>
                        </div>
                      );
                    },
                },
            ]
        }
    }

    
    componentDidMount() {
        console.log('Post Screen Mounted!');
    }

    handleSubmit = async () => {
        console.log('save button clicked!!')
        
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

                        <div className={classes.boxes}>

                        <div className={classes.widgets}>
                            <ValidatorForm ref="form" onSubmit={this.handleSubmit} onError={errors => console.log(errors)}>
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
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={4} style={{display: 'flex'}} justifyContent="flex-end" >
                                        <Stack spacing={2} direction="row">
                                            <Button variant="outlined" color="error">Cancel</Button>
                                            <Button variant="contained" >Update</Button>
                                            <Button variant="contained" color="success">Save</Button>
                                        </Stack>
                                    </Grid>   
                                </Grid>
                            </ValidatorForm>
                        </div>
                        </div>

                        <div className={classes.table}>
                            <div className={classes.cartable}>          
                            {this.state.loaded &&
                                <Grid container style={{ height: '100%', width: '100%', padding: '5px' }}>
                                    <DataTable
                                        columns={this.state.columns}
                                        rows={this.state.data}
                                        rowsPerPageOptions={5}
                                        pageSize={5}
                                        checkboxSelection={true}
                                    /> 
                                </Grid>
                            }
                            </div>
                        
                        </div>

                    </div>
                    
                </div>
             
            </Fragment>
           
        )

    }
}

export default withStyles(styleSheet)(Car) 