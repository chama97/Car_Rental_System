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
                
                <div className={classes.container} style={{ backgroundImage: `url(${Car2})` }}>
                    <div className={classes.bodycontainer} >
               
                        <span style={{ color: `white`, fontSize: '18px ', zIndex: '5', marginTop:'25%'}}>
                            Easy car rental private limited is a car rental service with 5 years of history.<br/>
                            This company has about 50 cars and 40 drivers working for them in regular shifts.<br/>
                            No. 200, Galle Road, Panadura
                        </span>
                    
                        
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

export default withStyles(styleSheet)(HomePage) 