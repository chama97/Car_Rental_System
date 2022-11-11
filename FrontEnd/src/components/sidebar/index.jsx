import { Component } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CommuteIcon from '@mui/icons-material/Commute';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CarRentalIcon from '@mui/icons-material/CarRental';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import "./sidebar.css";


class Sidebar extends Component {

    render() {
        let { classes } = this.props

        return (
            <div className="sidebar">
                <div className={classes.top}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <span className="logo">CAR<span> RENTAL</span></span>
                    </Link>
                </div>
                <div className={classes.center}>
                    <ul className={classes.ul}>
                        <p className={classes.title}>MAIN</p>
                        <Link to="/dash" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <DashboardIcon className={classes.icon} />
                                <span className={classes.span}>Dashboard</span>
                            </li>
                        </Link>

                        <p className={classes.title}>CARS</p>
                        <Link to="/car" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <DirectionsCarIcon className={classes.icon} />
                                <span className={classes.span}>Car</span>
                            </li>
                        </Link>
                        <Link to="/category" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <CommuteIcon className={classes.icon} />
                                <span className={classes.span}>Categories</span>
                            </li>
                        </Link>

                        <p className={classes.title}>BOOK</p>
                        <Link to="/customer" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <PeopleAltIcon className={classes.icon} />
                                <span className={classes.span}>Customers</span>
                            </li>
                        </Link>
                        <Link to="/reserv" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <ShoppingCartIcon className={classes.icon} />
                                <span className={classes.span}>Reservation</span>
                            </li>
                        </Link>
                        <Link to="/rental" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <CarRentalIcon className={classes.icon} />
                                <span className={classes.span}>Rental</span>
                            </li>
                        </Link>
                        <Link to="/report" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <BarChartOutlinedIcon className={classes.icon} />
                                <span className={classes.span}>Reports</span>
                            </li>
                        </Link>

                        <p className={classes.title}>TRAVEL</p>
                        <Link to="/driver" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <ManageAccountsIcon className={classes.icon} />
                                <span className={classes.span}>Drivers</span>
                            </li>
                        </Link>
                        <Link to="/schedule" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <EventAvailableIcon className={classes.icon} />
                                <span className={classes.span}>Schedule</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <hr />
                <div className={classes.bottom}>
                    <ul className={classes.ul}>
                        <Link to="/dash" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <HomeIcon className={classes.icon} />
                                <span className={classes.span}>Home</span>
                            </li>
                        </Link>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <LogoutIcon className={classes.icon} />
                                <span className={classes.span}>LogOut</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Sidebar)