import {Component} from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';

class Navbar extends Component{

    constructor(props) {
        super(props);
    }

    
    render(){
        let { classes } = this.props

        return(
            <div className={classes.container}>
            
            <Box className={classes.boxbar} >

               <Tabs variant="scrollable">

                    <Link to="/" className={classes.link__cover}>
                        <Tab   label="Home" />
                    </Link>
                    <Link to="/dash" className={classes.link__cover}>
                        <Tab  label="Help" />
                    </Link>
                    <Link to="/login" className={classes.link__cover}>
                        <Tab  label="Login" />
                    </Link>
                    <Link to="/sign" className={classes.link__cover}>
                        <Tab  label="Sign-Up" />
                    </Link>
                </Tabs>
            </Box>

            </div>

        )

    }
}

export default  withStyles(styleSheet)(Navbar)