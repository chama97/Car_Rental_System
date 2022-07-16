import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../components/navbar";

class Sign extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Fragment>
                <div><Navbar /></div>
                <h1>SignPage</h1>
            </Fragment>
        )

    }
}

export default withStyles(styleSheet)(Sign) 