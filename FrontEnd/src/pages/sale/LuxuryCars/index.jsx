import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import CustomNavbar from "../../../components/customNavbar";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SuzukiAlto from '../../../assets/img/General Cars/Suzuki Alto - Premium/suzuki-alto.jpg';
import Perodua from '../../../assets/img/General Cars/Perodua (Daihatsu) Axia/carlist-perodua-axia1.jpg';
import SuzukiAltoK10 from '../../../assets/img/General Cars/Suzuki Alto K10 - Auto/maruti-suzuki-alto-k10-car.png';
import { Link } from "react-router-dom";



class LuxuryCar extends Component{

    constructor(props) {
        super(props);
        
    }

    render(){
        let { classes } = this.props
        return(
            <Fragment className={classes.container}>

                <div><CustomNavbar /></div>
                <div className={classes.board}>

                    <div className={classes.profile}>
                        <Stack spacing={2} direction="row">
                            <Link to="/generalcar" style={{ color:'white', textDecoration: "none"}} >
                                <Button variant="outlined" >General</Button>
                            </Link>
                            <Link to="/premiumCar" style={{ color:'white', textDecoration: "none"}} >
                                <Button variant="outlined" >Premium</Button>
                            </Link>
                            <Link to="/luxurycar" style={{ color:'white', textDecoration: "none"}} >
                                <Button variant="outlined" >Luxury</Button>
                            </Link>
                        </Stack>
                    </div>

                    <div className={classes.mybook}>
                        <Card  className={classes.divs}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="210"
                                    imag src={SuzukiAlto}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Suzuki Alto - Premium
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <span>Auto | Petrol</span><br/>
                                        <span>Passengers - 4</span><br/>
                                        <span>FreeKm/Day - 100Km | Price/ExtraKm - 30.0</span><br/>
                                        <span>Daily Rate - Rs:2500 | Monthly Rate - Rs:64,350</span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card  className={classes.divs}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="210"
                                    imag src={Perodua}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Perodua (Daihatsu) Axia
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <span>Auto | Petrol</span><br/>
                                        <span>Passengers - 4</span><br/>
                                        <span>FreeKm/Day - 100Km | Price/ExtraKm - 30.0</span><br/>
                                        <span>Daily Rate - Rs:3500 | Monthly Rate - Rs:84,350</span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card  className={classes.divs}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="210"
                                    imag src={SuzukiAltoK10}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Suzuki Alto K10
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <span>Auto | Petrol</span><br/>
                                        <span>Passengers - 4</span><br/>
                                        <span>FreeKm/Day - 100Km | Price/ExtraKm - 30.0</span><br/>
                                        <span>Daily Rate - Rs:3000 | Monthly Rate - Rs:75,350</span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                    <div className={classes.mybook}>
                        <div className={classes.divs}></div>
                        <div className={classes.divs}></div>
                        <div className={classes.divs}></div>
                    </div>
                        
                </div>

                <div className={classes.containerBottom}>
                    <span className={classes.bottomSpan}>
                        Copyright @ 2022 Easy Car Rental
                    </span>
                </div>
    
             
            </Fragment>
           
        )

    }
}

export default withStyles(styleSheet)(LuxuryCar) 