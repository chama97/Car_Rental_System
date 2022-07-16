import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../components/navbar";
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Loginlogo from "../../assets/img/login.jpg";

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: 'admin',
            pw: 'admin',
            formData: {
                user_name: '',
                password: ''
            },
            open: false,
            message: '',
            severity: ''
        }
    }

    checkValidity() {
        console.log("Login button clicked!")

        console.log(this.state.formData)

        let formData = this.state.formData

        if (formData.user_name === this.state.userName && formData.password === this.state.pw) {
            console.log('credential matched!')
            this.setState({
                open: true,
                message: 'User credential matching sucess!',
                severity: 'success'
            })
        } else {
            console.log('credential didn\'t matche!')
            this.setState({
                open: true,
                message: 'User credential not matching!',
                severity: 'error'
            })
        }
    }

    render(){
        const { classes } = this.props;
        return(
            <Fragment className={classes.containers}>
            <div><Navbar /></div>
            <div className={classes.container}>

                <div className={classes.login__image}>
                    <img src={Loginlogo} height={550} width={550} />
                </div>
                
                <div className={classes.login__cover}>
                    <div className={classes.title__container}>
                        <PersonPinIcon sx={{ fontSize: 90 }} className={classes.userIcon} />
                        <span className={classes.titles} >USER LOGIN</span>
                    </div>
                    <div className={classes.form__container}>
                        <TextField
                            id="outlined-basic"
                            label="User name"
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
                                formData.user_name = e.target.value
                                this.setState({ formData })
                            }}
                        />
                        <TextField
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
                        />
                    </div>
                    <div className={classes.btn__container}>
                        <button className={classes.buttons}
                            variant="contained"
                            label="Login"
                            onClick={() => {
                                this.checkValidity()
                            }}
                        > Login</button>
                    </div>
                </div>
                {/* <GDSESnackBar
                    open={this.state.open}
                    onClose={() => {
                        this.setState({ open: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                /> */}
         
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

export default withStyles(styleSheet)(Login) 