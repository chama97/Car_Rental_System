import {Component, Fragment} from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../components/navbar";
import { Slide } from 'react-slideshow-image';
import Car1 from "../../assets/img/car5.jpg";
import Car2 from "../../assets/img/lamborghini_huracan_5k.jpg";
import Car3 from "../../assets/img/lamborghini_huracan 8k.jpg";
import { Carousel } from 'react-responsive-carousel';



class HomePage extends Component{

    constructor(props) {
        super(props);

    }

    render(){
        let { classes } = this.props

        return(
            <Fragment className={classes.containers}>
                <div><Navbar /></div>
                <div className={classes.container}>
                    <img src={Car2} height={'700px'} width={'100%'} />
                
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

export default withStyles(styleSheet)(HomePage) 