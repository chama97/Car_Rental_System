import {Component, Fragment} from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../components/navbar";
import { Slide } from 'react-slideshow-image';
import Car1 from "../../assets/img/car5.jpg";
import Car2 from "../../assets/img/car2.jpg";
import Car3 from "../../assets/img/car3.jpg";



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
                    <img src={Car1} height={'700px'} width={'100%'} />
                    {/* <Slide>
                        {this.slideImages.map((slideImage, index)=> (
                        <div className="each-slide" key={index}>
                            <div style={{'backgroundImage': `url(${slideImage.url})`, height:'600', width:'1000'}}>
                                <span>{slideImage.caption}</span>
                            </div>
                        </div>
                        ))} 
                    </Slide> */}
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