import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Sidebar from "../../components/sidebar";
import AdminNavbar from "../../components/adminNavbar";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CustomerService from "../../services/CustomerService";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class Customer extends Component{

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
        }
    }

    deleteCustomer = async (email) => {
        let params = {
            email: email
        }
         let res = await CustomerService.deleteCustomer(params);

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

    loadData = async () => {
        let res = await CustomerService.fetchCustomer();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        } else {
            console.log("fetching error: " + res)
        }

        this.exampleForMap()
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

                        <div className={classes.table}>
                            <div className={classes.custable}>  
                                <div className={classes.lblcustomer}><span>Customers</span></div> 
                                <hr className={classes.hr} /> 

                                <Stack className={classes.stack} spacing={2} direction="row">
                                    <TextField id="filled-search" label="Search field" type="search" size="small" variant="outlined"/>
                                    <Button variant="outlined">Search</Button>
                                </Stack>  

                                <Grid container style={{ height: '100%', width: '100%', padding: '15px' }}>
                                <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="customer table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="left"> Email</TableCell>
                                    <TableCell align="left"> Password</TableCell>
                                    <TableCell align="left"> Name</TableCell>
                                    <TableCell align="left"> NIC</TableCell>
                                    <TableCell align="left"> License</TableCell>
                                    <TableCell align="left"> Address</TableCell>
                                    <TableCell align="left"> Contact</TableCell>
                                    <TableCell align="left">Action</TableCell>
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
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteCustomer(row.email)
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
                    
                </div>
             
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(Customer) 