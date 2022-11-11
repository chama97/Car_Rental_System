import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Sidebar from "../../../components/sidebar";
import AdminNavbar from "../../../components/adminNavbar";
import Grid from '@mui/material/Grid';
import "./dash.css";

class DashBoard extends Component{

    render(){
        let { classes } = this.props

        return(
            <Fragment >
                <div className={classes.container}>
                    <div className="leftSide">
                        <Sidebar />
                    </div>
                    <div className="center">
                        <div className={classes.appBar}>
                            <AdminNavbar />
                        </div>
                        <div className={classes.boxes}>
                        <div className={classes.widget}>
                            <Grid container className={classes.gridss} spacing={{ xs: 5, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            <Grid item xs={6} sm={4} md={4} style={{display: 'flex', justifyContent: 'center'}}>
                            <div className={classes.widgets}>
                                <div className={classes.widgTitle}><span>Reservations</span></div>
                                <div className={classes.widgBody}><span>02</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4} style={{display: 'flex', justifyContent: 'center'}}>
                            <div className={classes.widgets}>
                                <div className={classes.widgTitle}><span>Available Cars</span></div>
                                <div className={classes.widgBody}><span>28</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4} style={{display: 'flex', justifyContent: 'center'}}>
                            <div className={classes.widgets}>
                                <div className={classes.widgTitle}><span>Drivers</span></div>
                                <div className={classes.widgBody}><span>40</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4} style={{display: 'flex', justifyContent: 'center'}}>
                            <div className={classes.widgets}>
                                <div className={classes.widgTitle}><span>Customers</span></div>
                                <div className={classes.widgBody}><span>03</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4} style={{display: 'flex', justifyContent: 'center'}}>
                            <div className={classes.widgets}>
                                <div className={classes.widgTitle}><span>Daily Rate</span></div>
                                <div className={classes.widgBody}><span>10300</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4} style={{display: 'flex', justifyContent: 'center'}}>
                            <div className={classes.widgets}>
                                <div className={classes.widgTitle}><span>Monthly Rate</span></div>
                                <div className={classes.widgBody}><span>309000</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                            </Grid>
                            </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(DashBoard)