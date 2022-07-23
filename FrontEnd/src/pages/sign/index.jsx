import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../components/navbar";
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
import CustomerService from "../../services/CustomerService";
import SnackBar from "../../components/SnackBar";


class Sign extends Component{

    constructor(props) {
        super(props);
        this.state = {
          formData: {
              email: '',
              password: '',
              name: '',
              nic: '',
              license: '',
              address: '',
              contact: ''
          },
          alert: false,
          message: '',
          severity: '',

        }
    }

    clearFields = () => {
      this.setState({
          formData: {
              email: '',
              password: '',
              name: '',
              nic: '',
              license: '',
              address: '',
              contact: ''
          }
      });
    };

    submitCustomer = async () => {
      let formData = this.state.formData;
      let res = await CustomerService.postCustomer(formData);

      console.log(res)    //print the promise
  
      if (res.status === 201) {
          this.setState({
              alert: true,
              message: 'done',
              severity: 'success'
          });
          this.clearFields();
      } else {
          this.setState({
              alert: true,
              message: 'error try again',
              severity: 'error'
          });
      }
    }

    render(){
        const { classes } = this.props;
        return(
            <Fragment >
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
                        onSubmit={this.submitCustomer}
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
                            value={this.state.formData.email}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.email = e.target.value
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
                            value={this.state.formData.password}
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
                            value={this.state.formData.name}
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
                            value={this.state.formData.nic}
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
                            value={this.state.formData.license}
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
                            value={this.state.formData.address}
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
                            value={this.state.formData.contact}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.contact = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                       
                        <button className={classes.buttons}
                            variant="contained"
                            label="Sign-Up"
                            type="submit"
                          > Login
                        </button>
                    </ValidatorForm>
                
                </div>
                <SnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ alert: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
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