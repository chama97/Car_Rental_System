import {Component} from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import carLogo from "../../assets/img/carr.jpg"

class Navbar extends Component{

    constructor(props) {
        super(props);
    }

    
    render(){
        let { classes } = this.props

        return(
            <div className={classes.container}>

                
            
                <Box className={classes.boxbar} >
                <div className={classes.carRental}>
                    <img src={carLogo} height={60} width={150} />
                    <span className={classes.carRentalText}>
                        Easy Car Rental
                    </span>
                </div>
                <Tabs variant="scrollable">

                    <Link to="/" className={classes.link__cover}>
                        <Tab sx={{ fontSize: 16 }}  label="Home" />
                    </Link>
                    <Link to="/" className={classes.link__cover}>
                        <Tab sx={{ fontSize: 16 }} label="Help" />
                    </Link>
                    <Link to="/login" className={classes.link__cover}>
                        <Tab sx={{ fontSize: 16 }} label="Login" />
                    </Link>
                    <Link to="/sign" className={classes.link__cover}>
                        <Tab sx={{ fontSize: 16 }} label="Sign-Up" />
                    </Link>
                    <Link to="/dash" className={classes.link__cover}>
                        <Tab sx={{ fontSize: 16 }} label="Contact Us" />
                    </Link>
                </Tabs>
                </Box>

            </div>

        )

    }
}

export default  withStyles(styleSheet)(Navbar)