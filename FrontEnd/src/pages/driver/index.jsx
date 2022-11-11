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
import DeleteIcon from '@mui/icons-material/Delete';
import DriverService from "../../services/DriverService";
import SnackBar from "../../components/SnackBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SubmitButton from '../../components/Button';
import "./driver.css";


class Driver extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: '',
                name: '',
                nic: '',
                license: '',
                address: '',
                contact: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'success',
        }
    }

    loadData = async () => {
        let res = await DriverService.fetchDriver();
        if (res.status === 200) {
            this.setState({
                data: res.data.data,
            });
        } else {
            console.log("fetching error: " + res)
        }
    };


    deleteDriver = async (email) => {
        let params = {
            email: email
        }
        let res = await DriverService.deleteDriver(params);
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


    updateDriver = (data) => {
        console.log(data)
        this.setState({
            btnLabel: 'update',
            btnColor: 'primary',
            formData: {
                email: data.email,
                password: data.password,
                name: data.name,
                nic: data.nic,
                license: data.license,
                address: data.address,
                contact: data.contact
            }
        });
    };


    clearFields = () => {
        this.setState({
            formData: {
                email: '',
                password: '',
                name: '',
                nic: '',
                license: '',
                address: '',
                contact: ''
            }
        });
    };


    submitDriver = async () => {
        let formData = this.state.formData;

        if (this.state.btnLabel === "save") {
            let res = await DriverService.postDriver(formData);
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
            let res = await DriverService.putDriver(formData);
            if (res.status === 200) {
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


    render() {
        let { classes } = this.props

        return (
            <Fragment>
                <div className={classes.container}>
                    <div className="leftSide8">
                        <Sidebar />
                    </div>
                    <div className="center8">
                        <div className={classes.appBar}>
                            <AdminNavbar />
                        </div>
                        <div className={classes.boxes}>
                            <div className={classes.widgets}>
                                <div className={classes.lblcustomer}><span>Drivers</span></div>
                                <hr className={classes.hr} />

                                <ValidatorForm ref="form" onSubmit={this.submitDriver} onError={errors => console.log(errors)}>
                                    <Grid container className={classes.gridss} spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 12, md: 12 }} >
                                        <Grid item lg={6} md={6} sm={12} xm={12}  >
                                            <TextValidator
                                                id="outlined-basic"
                                                variant="outlined"
                                                label="User Name"
                                                size="small"
                                                value={this.state.formData.email}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.email = e.target.value
                                                    this.setState({ formData })
                                                }}
                                                style={{ width: '100%' }}
                                                validators={['required', 'isEmail']}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xm={12}>
                                            <TextValidator
                                                id="outlined-basic"
                                                variant="outlined"
                                                label="Password"
                                                size="small"
                                                value={this.state.formData.password}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.password = e.target.value
                                                    this.setState({ formData })
                                                }}
                                                style={{ width: '100%' }}
                                                validators={['required', 'matchRegexp:^[A-z0-9/ ]{4,10}$']}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xm={12} >
                                            <TextValidator
                                                id="outlined-basic"
                                                variant="outlined"
                                                label="Name"
                                                size="small"
                                                value={this.state.formData.name}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.name = e.target.value
                                                    this.setState({ formData })
                                                }}
                                                style={{ width: '100%' }}
                                                validators={['required']}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xm={12}  >
                                            <TextValidator
                                                id="outlined-basic"
                                                variant="outlined"
                                                label="NIC"
                                                size="small"
                                                value={this.state.formData.nic}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.nic = e.target.value
                                                    this.setState({ formData })
                                                }}
                                                style={{ width: '100%' }}
                                                validators={['required', 'matchRegexp:^[0-9]{9}[A-Z]{1}$']}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xm={12}  >
                                            <TextValidator
                                                id="outlined-basic"
                                                variant="outlined"
                                                label="License"
                                                size="small"
                                                value={this.state.formData.license}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.license = e.target.value
                                                    this.setState({ formData })
                                                }}
                                                style={{ width: '100%' }}
                                                validators={['required', 'matchRegexp:^[0-9]{9}$']}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xm={12}  >
                                            <TextValidator
                                                id="outlined-basic"
                                                variant="outlined"
                                                label="Address"
                                                size="small"
                                                value={this.state.formData.address}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.address = e.target.value
                                                    this.setState({ formData })
                                                }}
                                                style={{ width: '100%' }}
                                                validators={['required', 'matchRegexp:^[A-z0-9/ ]{3,20}$']}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xm={12}  >
                                            <TextValidator
                                                id="outlined-basic"
                                                variant="outlined"
                                                label="Contact"
                                                size="small"
                                                value={this.state.formData.contact}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.contact = e.target.value
                                                    this.setState({ formData })
                                                }}
                                                style={{ width: '100%' }}
                                                validators={['required', 'matchRegexp:^[0-9]{9}$']}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xm={12} style={{ display: 'flex', justifyContent: "flex-end" }}  >
                                            <Stack spacing={2} direction="row">
                                                <Button variant="outlined">Cancel</Button>
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
                                    <TableContainer component={Paper} sx={{ maxHeight: '100%' }}>
                                        <Table sx={{ minWidth: 650 }} aria-label="customer table">
                                            <TableHead>
                                                <TableRow style={{ backgroundImage: 'linear-gradient(to right top, #777277, #766e7a, #736a7e, #6c6783, #626589)' }}>
                                                    <TableCell align="left" style={{ color: 'white' }}> Email</TableCell>
                                                    <TableCell align="left" style={{ color: 'white' }}> Password</TableCell>
                                                    <TableCell align="left" style={{ color: 'white' }}> Name</TableCell>
                                                    <TableCell align="left" style={{ color: 'white' }}> NIC</TableCell>
                                                    <TableCell align="left" style={{ color: 'white' }}> License</TableCell>
                                                    <TableCell align="left" style={{ color: 'white' }}> Address</TableCell>
                                                    <TableCell align="left" style={{ color: 'white' }}> Contact</TableCell>
                                                    <TableCell align="left" style={{ color: 'white' }}>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    this.state.data.map((row) => (
                                                        <TableRow>
                                                            <TableCell align="left">{row.email}</TableCell>
                                                            <TableCell align="left">{row.password}</TableCell>
                                                            <TableCell align="left">{row.name}</TableCell>
                                                            <TableCell align="left">{row.nic}</TableCell>
                                                            <TableCell align="left">{row.license}</TableCell>
                                                            <TableCell align="left">{row.address}</TableCell>
                                                            <TableCell align="left">{row.contact}</TableCell>
                                                            <TableCell align="left">
                                                                <Tooltip title="Edit">
                                                                    <IconButton
                                                                        onClick={() => {
                                                                            console.log("edit icon clicked!")
                                                                            this.updateDriver(row);
                                                                        }}
                                                                    >
                                                                        <EditIcon color="primary" />
                                                                    </IconButton>
                                                                </Tooltip>
                                                                <Tooltip title="Delete">
                                                                    <IconButton
                                                                        onClick={() => {
                                                                            this.deleteDriver(row.email)
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
                            this.setState({ alert: false })
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

export default withStyles(styleSheet)(Driver)