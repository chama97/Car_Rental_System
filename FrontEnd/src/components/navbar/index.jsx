import {Component} from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import carLogo from "../../assets/img/carr.jpg"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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

               <Stack spacing={3} direction="row" style={{height: '60%'}}>  
                    <Link to="/" className={classes.link__cover} >      
                        <Button style={{color:'#ebf1ff',
                                        height: '100%',
                                        fontWeight: 'bold',
                                        letterSpacing: '1px',
                                        fontFamily: 'Lucida Sans Unicode' ,
                                        fontSize: '15px'
                                        }} >
                                        Home
                        </Button>
                    </Link> 
                    <Link to="/custdash" className={classes.link__cover}>      
                        <Button style={{color:'#ebf1ff',
                                        height: '100%',
                                        fontWeight: 'bold',
                                        letterSpacing: '1px',
                                        fontFamily: 'Lucida Sans Unicode' ,
                                        fontSize: '15px'
                                        }} >
                                        Contact Us
                        </Button>
                    </Link> 
                    <Link to="/dash" className={classes.link__cover}>      
                        <Button style={{color:'#ebf1ff',
                                        height: '100%',
                                        fontWeight: 'bold',
                                        letterSpacing: '1px',
                                        fontFamily: 'Lucida Sans Unicode' ,
                                        fontSize: '15px'
                                        }} >
                                        About Us
                        </Button>
                    </Link> 
                    <Link to="/sign" className={classes.link__cover}>      
                        <Button style={{color:'#ebf1ff',
                                        height: '100%',
                                        fontWeight: 'bold',
                                        letterSpacing: '1px',
                                        fontFamily: 'Lucida Sans Unicode' ,
                                        fontSize: '15px'
                                        }} >
                                        Sign-Up
                        </Button>
                    </Link> 
                    <Link to="/login" className={classes.link__cover}>      
                        <Button style={{color:'#ebf1ff',
                                        height: '100%',
                                        fontWeight: 'bold',
                                        letterSpacing: '1px',
                                        fontFamily: 'Lucida Sans Unicode' ,
                                        fontSize: '15px'
                                        }} >
                                        Login
                        </Button>
                    </Link> 
                </Stack>
                
                </Box>

            </div>

        )

    }
}

export default  withStyles(styleSheet)(Navbar)