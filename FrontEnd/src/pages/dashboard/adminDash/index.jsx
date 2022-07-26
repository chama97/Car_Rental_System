import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Sidebar from "../../../components/sidebar";
import AdminNavbar from "../../../components/adminNavbar";


class DashBoard extends Component{

    constructor(props) {
        super(props);
        
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
                                <div className={classes.widgTitle}><span>Reservations</span></div>
                                <div className={classes.widgBody}><span>02</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                            <div className={classes.widgets}>
                                <div className={classes.widgTitle}><span>Available Cars</span></div>
                                <div className={classes.widgBody}><span>28</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                            <div className={classes.widgets}>
                                <div className={classes.widgTitle}><span>Drivers</span></div>
                                <div className={classes.widgBody}><span>40</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                            <div className={classes.widgets}>
                                <div className={classes.widgTitle}><span>Customers</span></div>
                                <div className={classes.widgBody}><span>03</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                        </div>
                        <div className={classes.bottom}>
                            <div className={classes.widgets}>
                                <div className={classes.widgTitle}><span>Daily Rate</span></div>
                                <div className={classes.widgBody}><span>10300</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                            <div className={classes.widgets}>
                                <div className={classes.widgTitle}><span>Monthly Rate</span></div>
                                <div className={classes.widgBody}><span>309000</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                            <div className={classes.widgetss}></div>
                            <div className={classes.widgetss}></div>
                        </div>

                    </div>
                    
                </div>
             
            </Fragment>
           
        )

    }
}

export default withStyles(styleSheet)(DashBoard) 