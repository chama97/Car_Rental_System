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
import ReportService from "../../services/ReportService";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { color } from "@mui/system";

class Report extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: '',
            },
            data: [],
        }
    }

   
    loadData = async () => {
        let res = await ReportService.fetchReport();

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
                                <div className={classes.lblcustomer}><span>Reports</span></div> 
                                <hr className={classes.hr} /> 

                                <Stack className={classes.stack} spacing={3} direction="row">
                                    <div className={classes.Incomebox}>
                                        <div className={classes.divIcon}>
                                            <AccountBalanceIcon style={{ fontSize: 60 , color:'#862d59'}}/>
                                        </div>
                                        <div className={classes.divtext}>
                                            <div style={{width: '100%', height:'50%', display:'flex', alignItems:'center'}}>
                                                <span style={{paddingLeft: '8%', fontSize:'18px', color:'#006600', fontWeight:'bold'}}>
                                                    Revenue</span>
                                            </div>
                                            <div style={{width: '100%', height:'50%'}}>
                                                <span style={{paddingLeft: '8%', fontSize:'22px', color:'#862d59'}}>
                                                    <span>Rs : </span> 
                                                    8000000
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.Incomebox}>
                                        <div className={classes.divIcon}>
                                            <MonetizationOnIcon style={{ fontSize: 60 , padding: '30px', color:'#862d59'}}/>
                                        </div>
                                        <div className={classes.divtext}>
                                            <div style={{width: '100%', height:'50%', display:'flex', alignItems:'center'}}>
                                                <span style={{paddingLeft: '8%', fontSize:'18px', color:'#006600', fontWeight:'bold'}}>
                                                    Daily Income</span>
                                            </div>
                                            <div style={{width: '100%', height:'50%'}}>
                                                <span style={{paddingLeft: '8%', fontSize:'22px', color:'#862d59'}}>
                                                    <span>Rs : </span> 
                                                    20000
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.Incomebox}>
                                        <div className={classes.divIcon}>
                                            <LocalAtmIcon style={{ fontSize: 60 , padding: '30px', color:'#862d59'}}/>
                                        </div>
                                        <div className={classes.divtext}>
                                            <div style={{width: '100%', height:'50%', display:'flex', alignItems:'center'}}>
                                                <span style={{paddingLeft: '8%', fontSize:'18px', color:'#006600', fontWeight:'bold'}}>
                                                    Monthly Income</span>
                                            </div>
                                            <div style={{width: '100%', height:'50%'}}>
                                                <span style={{paddingLeft: '8%', fontSize:'22px', color:'#862d59'}}>
                                                    <span>Rs : </span> 
                                                    600000
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Stack>  

                                <Grid container style={{ height: '100%', width: '100%', padding: '15px' }}>
                                <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="customer table">
                                <TableHead>
                                <TableRow style={{backgroundImage: 'linear-gradient(to right top, #777277, #766e7a, #736a7e, #6c6783, #626589)'}}>
                                    <TableCell align="left" style={{color:'white'}}> Rental Id</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Pay Date</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Rental Charge</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Damage Charge</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Additional Charge</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Total Charge</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.rentalId}</TableCell>
                                            <TableCell align="left">{row.payDate}</TableCell>
                                            <TableCell align="left">{row.rentalCharge}</TableCell>
                                            <TableCell align="left">{row.damageCharge}</TableCell>
                                            <TableCell align="left">{row.additionalCharge}</TableCell>
                                            <TableCell align="left">{row.totalCharge}</TableCell>
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

export default withStyles(styleSheet)(Report) 