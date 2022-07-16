import {Component, Fragment} from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../components/navbar";


class HomePage extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        let { classes } = this.props

        return(
            <Fragment>
                <div><Navbar /></div>
                <h1>HomePage</h1>
            </Fragment>
            
        )

    }

}

export default withStyles(styleSheet)(HomePage) 