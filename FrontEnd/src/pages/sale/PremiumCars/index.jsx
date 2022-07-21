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
import ToyotaCorolla from '../../../assets/img/Premium/Toyota Corolla Axio/002_2.jpg';
import ToyotaAxioNKR165 from '../../../assets/img/Premium/Toyota Axio NKR 165/LK21210300-01-E.webp';
import ToyotaAllionNZT260 from '../../../assets/img/Premium/Toyota Allion NZT 260/images_toyota_allion_2010_1_b.jpg';
import PeroduaBezzaPrime from '../../../assets/img/Premium/Perodua Bezza Prime Sedan/Proton-Persona-1.6-A.webp';
import { Link } from "react-router-dom";



class PremiumCar extends Component{

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
                            <Link to="/generalcar" className={classes.btns} >
                                <Button variant="outlined" >General</Button>
                            </Link>
                            <Link to="/premiumCar" className={classes.btns} style={{backgroundColor: '#e6f3ff'}} >
                                <Button variant="outlined" >Premium</Button>
                            </Link>
                            <Link to="/luxurycar" className={classes.btns} >
                                <Button variant="outlined" >Luxury</Button>
                            </Link>
                        </Stack>
                    </div>

                    <div className={classes.mybook}>
                        <Card  className={classes.divs}>
                        <Link to="/booking" style={{textDecoration: 'none'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="210"
                                    imag src={ToyotaCorolla}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Toyota Corolla Axio
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <span>Auto | Petrol</span><br/>
                                        <span>Passengers - 4</span><br/>
                                        <span>FreeKm/Day - 100Km | Price/ExtraKm - 30.0</span><br/>
                                        <span>Daily Rate - Rs:2500 | Monthly Rate - Rs:64,350</span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                        </Card>

                        <Card  className={classes.divs}>
                        <Link to="/booking" style={{textDecoration: 'none'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="210"
                                    imag src={ToyotaAxioNKR165}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Toyota Axio NKR 165
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <span>Auto | Petrol</span><br/>
                                        <span>Passengers - 4</span><br/>
                                        <span>FreeKm/Day - 100Km | Price/ExtraKm - 30.0</span><br/>
                                        <span>Daily Rate - Rs:3500 | Monthly Rate - Rs:84,350</span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                        </Card>

                        <Card  className={classes.divs}>
                        <Link to="/booking" style={{textDecoration: 'none'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="210"
                                    imag src={ToyotaAllionNZT260}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Toyota Allion NZT 260
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <span>Auto | Petrol</span><br/>
                                        <span>Passengers - 4</span><br/>
                                        <span>FreeKm/Day - 100Km | Price/ExtraKm - 30.0</span><br/>
                                        <span>Daily Rate - Rs:3000 | Monthly Rate - Rs:75,350</span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                        </Card>
                    </div>

                    <div className={classes.mybook}>
                        <Card  className={classes.divs}>
                        <Link to="/booking" style={{textDecoration: 'none'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="210"
                                    imag src={PeroduaBezzaPrime}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Perodua Bezza Prime Sedan
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <span>Auto | Petrol</span><br/>
                                        <span>Passengers - 4</span><br/>
                                        <span>FreeKm/Day - 100Km | Price/ExtraKm - 30.0</span><br/>
                                        <span>Daily Rate - Rs:3000 | Monthly Rate - Rs:75,350</span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                        </Card>
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

export default withStyles(styleSheet)(PremiumCar) 