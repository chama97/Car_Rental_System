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
import SnackBar from "../../components/SnackBar";
import CustomerService from "../../services/CustomerService";
import LoginService from "../../services/LoginService";
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';


class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            adminName: 'admin@gmail.com',
            password: '1234',
            formData: {
                email: '',
                password: '',
                role: ''
            },
            open: false,
            message: '',
            severity: '',

            data: [],
            
        }

       this.checkLogin = this.checkLogin.bind(this);
    }


    isExistsCustomer(id,pw){
        let x=-1;
        for(let i=0;i<this.state.data.length;i++){
            if(this.state.data[i].email === id && this.state.data[i].password === pw) {
                x = i;
            }
        }
        return x;
    }


    loadData = async () => {
        let res = await CustomerService.fetchCustomer();
        if (res.status === 200) {
            this.setState({
                data: res.data.data,
            });
        } else {
            console.log("fetching error: " + res)
        }
    };

   
    checkLogin= async () =>{
        let formData = this.state.formData;
        let index = this.isExistsCustomer(formData.email,formData.password);

        if(index !== -1){      
            let res = await LoginService.postLogin(formData);
            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: 'done',
                    severity: 'success'
                });
                window.location.href = "./custdash"
            } else {
                this.setState({
                    alert: true,
                    message: 'error try again',
                    severity: 'error'
                });
            }
    
        } else if(formData.email === this.state.adminName && formData.password === this.state.password) {
            this.setState({
                open: true,
                message: "Admin Login Successes..!",
                severity: "success",
            });
            window.location.href = "./dash"

        } else{
            this.setState({
                open: true,
                message: "Pleas Check Your Username Or Password..!",
                severity: "error",
            });
        }
    }

    render(){
        const { classes } = this.props;
        return(
            <Fragment>
            <div><Navbar /></div>
            <div className={classes.container}>

                <div className={classes.login__image}>
                    <img src={Loginlogo} height={550} width={550} alt=''/>
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
                                formData.email = e.target.value
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
                        <div className={classes.btn__container}>
                            <button className={classes.buttons}
                                variant="contained"
                                label="Login"
                                // type="submit"
                                onClick={() => {
                                    this.checkLogin()
                                }}
                            > Login</button>
                        </div>
                    </div>
                    
                </div>
                <SnackBar
                    open={this.state.open}
                    onClose={() => {
                        this.setState({ open: false })
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

export default   withStyles(styleSheet)(Login) 