import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../components/navbar/NavBar";
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { carData } from "../../data/carData";
import Bottom from "../../components/bottom/Bottom";
import './visit.css'
import Button from '@mui/material/Button';

class Visit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.setState({
            data: carData,
        });
    }

    render() {
        let { classes } = this.props

        return (
            <Fragment>
                <div><Navbar /></div>
                <div className={classes.board}>
                    <div className={classes.profile} id='profile'>
                        <div className="prof-top">
                            <span style={{ fontSize: '26px', fontWeight: '600', color: 'rgb(43, 43, 103)' }}>Car Rental in Reading</span>
                            <span>Lorem ipsum, Dolor sit amet consectetur adipisicing elit. Laudantium nemo magnam corrupti explicabo dolorum, Aliquam voluptatem natus fugit magni!</span>
                        </div>
                        <div className="prof-center">
                        </div>
                        <div className="prof-bot">
                            <span className="prof-bot-text" >General Cars</span><span>|</span>
                            <span className="prof-bot-text" > Premium Cars</span><span>|</span>
                            <span className="prof-bot-text" > Luxury Cars</span>
                        </div>
                    </div>

                    <div className={classes.mybook}>
                        <Grid container spacing={{ xs: 2, md: 3 }} style={{ padding: '10px' }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            {
                                this.state.data.map((card) => (
                                    <Grid item xs={6} sm={4} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Card style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            width: '97%',
                                            borderRadius: '5px',
                                            boxShadow: '1px 2px 5px gray',
                                            border: '1px solid rgb(226, 226, 226)',
                                            '&:hover': {
                                                backgroundColor: '#e1e1ea',
                                            },
                                        }}
                                        >
                                            <CardActionArea onClick={() => {
                                                window.location = "./login"
                                            }}>
                                                <CardMedia
                                                    component="img"
                                                    height="210"
                                                    imag src={card.img}
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography style={{color:'purple'}} gutterBottom variant="h5" component="div">
                                                        {card.brand}
                                                    </Typography>
                                                    <Typography style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between'}} variant="body2" color="text.secondary">
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                                            <div>
                                                                <span>Transmit Type - </span><span>{card.transType} </span>
                                                            </div>
                                                            <div>
                                                                <span>Fuel Type - </span> <span> {card.fuel}</span>
                                                            </div>
                                                            <div>
                                                                <span>Passengers - </span> <span>{card.passenger}</span>
                                                            </div>
                                                            <div>
                                                                <span>Monthly Rate - </span><span>{card.monthlyRate}</span>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                                            <div>
                                                                <span>Availability - </span><span style={{color:'green', fontSize:'15px'}}>Yes</span>
                                                            </div>
                                                            <div>
                                                                <span>Daily Rate - </span><span>{card.dailyRate}</span>
                                                            </div>
                                                            <div style={{marginTop:'5px', marginLeft:'35px'}}>
                                                                <Button style={{fontWeight:'500',border:'2px solid blue'}} variant="outlined">Book Now</Button>
                                                            </div>
                                                        </div>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </div>
                </div>
                <Bottom />
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(Visit)