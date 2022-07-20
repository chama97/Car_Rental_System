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
import Mercedes from '../../../assets/img/Luxury/Mercedes/A_Class.jfif';
import BMW from '../../../assets/img/Luxury/BMW i8/chrome-imag.png';
import Toyota from '../../../assets/img/Luxury/Toyota Premio/WS_Fr_MJ007.jpg';
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
                            <Link to="/generalcar" className={classes.btns} >
                                <Button variant="outlined">General</Button>
                            </Link>
                            <Link to="/premiumCar" className={classes.btns} >
                                <Button variant="outlined" >Premium</Button>
                            </Link>
                            <Link to="/luxurycar" className={classes.btns} style={{backgroundColor: '#e6f3ff'}} >
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
                                    imag src={Mercedes}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Mercedes C-300
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
                                    imag src={BMW}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        BMW i8
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
                                    imag src={Toyota}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Toyota Premio 2020
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