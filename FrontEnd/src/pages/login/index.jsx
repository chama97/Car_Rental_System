import { Component, Fragment } from "react";
import Navbar from "../../components/navbar/NavBar";
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Loginlogo from "../../assets/img/login.jpg";
import SnackBar from "../../components/SnackBar";
import CustomerService from "../../services/CustomerService";
import LoginService from "../../services/LoginService";
import "./login.css";
import Bottom from "../../components/bottom/Bottom";
import localStorageService from "../../services/StorageService";


class Login extends Component {

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


    isExistsCustomer(id, pw) {
        let x = -1;
        for (let i = 0; i < this.state.data.length; i++) {
            if (this.state.data[i].email === id && this.state.data[i].password === pw) {
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


    componentDidMount() {
        this.loadData();
    }


    checkLogin = async () => {
        let formData = this.state.formData;
        let index = this.isExistsCustomer(formData.email, formData.password);

        if (index !== -1) {
            let res = await LoginService.postLogin(formData);
            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: 'done',
                    severity: 'success'
                });
                localStorageService.setItem("userToken", formData.email);
                window.location = "./custdash"
            } else {
                this.setState({
                    alert: true,
                    message: 'error try again',
                    severity: 'error'
                });
            }

        } else if (formData.email === this.state.adminName && formData.password === this.state.password) {
            this.setState({
                open: true,
                message: "Admin Login Successes..!",
                severity: "success",
            });
            window.location.href = "./dash"
        } else {
            this.setState({
                open: true,
                message: "Pleas Check Your Username Or Password..!",
                severity: "error",
            });
        }
    }


    render() {

        return (
            <Fragment>
                <div><Navbar /></div>
                <div className="container">
                    <div className="imageSide">
                        <img src={Loginlogo} alt='' />
                    </div>
                    <div className="formSide" >
                        <div className="login__cover">
                            <div className="title__container">
                                <PersonPinIcon sx={{ fontSize: 90 }} className="userIcon" />
                                <span className="titles" >USER LOGIN</span>
                            </div>
                            <div className="form__container">
                                <TextField
                                    style={{width:'80%'}}
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
                                    style={{width:'80%'}}
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
                                <div className="btn__container">
                                    <button className="buttons"
                                        style={{width:'80%'}}
                                        variant="contained"
                                        label="Login"
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
                </div>
                <Bottom />
            </Fragment>
        )
    }
}

export default Login