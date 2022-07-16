import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../components/navbar";
import TextField from '@mui/material/TextField';
import Signlogo from "../../assets/img/signup.png";
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


class Sign extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        const { classes } = this.props;
        return(
            <Fragment className={classes.containers}>
                <div><Navbar /></div>
                <div className={classes.container}>

                <div className={classes.login__image}>
                    <img src={Signlogo} height={550} width={550} />
                </div>
                
                <div className={classes.login__cover}>
                    <div className={classes.title__container}>
                        {/* <PersonPinIcon sx={{ fontSize: 90 }} className={classes.userIcon} /> */}
                        <span className={classes.titles} >SIGN UP</span>
                    </div>
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.handleSubmit}
                        onError={errors => console.log(errors)}
                        className={classes.form__container}>
                        <TextValidator
                            id="outlined-basic"
                            label="E-mil"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <EmailIcon />
                                  </InputAdornment>
                                ),
                              }}
                            onChange={(e) => {
                                let formData = this.state.formData
                                formData.user_name = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                        <TextValidator
                            id="outlined-basic"
                            type="password"
                            label="Password"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <LockIcon />
                                  </InputAdornment>
                                ),
                              }}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.password = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                        <TextValidator
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <AccountCircle />
                                  </InputAdornment>
                                ),
                              }}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.name = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                        <TextValidator
                            id="outlined-basic"
                            label="NIC"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <PersonIcon />
                                  </InputAdornment>
                                ),
                            }}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.nic = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                        <TextValidator
                            id="outlined-basic"
                            label="License"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <CreditCardIcon />
                                  </InputAdornment>
                                ),
                              }}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.license = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                        <TextValidator
                            id="outlined-basic"
                            label="Address"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <HomeIcon />
                                  </InputAdornment>
                                ),
                              }}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.address = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                        <TextValidator
                            id="outlined-basic"
                            label="Contact"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <PhoneInTalkIcon />
                                  </InputAdornment>
                                ),
                              }}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.contact = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                    </ValidatorForm>
                    <div className={classes.btn__container}>
                        <button className={classes.buttons}
                            variant="contained"
                            label="Sign-Up"
                            onClick={() => {
                               // this.checkValidity()
                            }}
                        > Login</button>
                    </div>
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

export default withStyles(styleSheet)(Sign) 