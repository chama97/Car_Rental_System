import {Component} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import LoginService from "../../services/LoginService";
import './cusnav.css'
import localStorageService from "../../services/StorageService";


class CustomNavbar extends Component{

    constructor(props) {
        super(props);
        this.state = {

          open: false,
          message: '',
          severity: '',

          userData: "",
      }
      this.LogOutAction = this.LogOutAction.bind(this);
    }


    componentDidMount = async () =>{
      const token = await localStorageService.getItem("userToken");
        if (token) {
            console.log(token);
            this.setState({
                userData: token
            })
        }
    }

    LogOutAction= async () =>{
      let params = {
        email: localStorageService.getItem("userToken")
      }
      let res = await LoginService.deleteLogin(params);
        if (res.status === 200) {
              this.setState({
                  alert: true,
                  message: 'done',
                  severity: 'success'
              });

              localStorage.removeItem('userToken');
              window.location.href = "./"
        } else {
              this.setState({
                  alert: true,
                  message: 'error try again',
                  severity: 'error'
              });
        }
    }


    render(){
      // const {data} = this.props.location

      return (
        <Box sx={{ flexGrow: 1,height:'70px' }}>
          <AppBar position="static" sx={{backgroundImage: 'linear-gradient(to right top, #402baa, #3b39b6, #3546c1, #2e53cc, #255fd7)',height:'70px' }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
                >
                <AccountCircle style={{fontSize:'40px'}}/>
              </IconButton>
              <Typography variant="h5" component="div"
                  sx={{ flexGrow: 0.7, fontFamily: 'Arial, Helvetica, sans-serif',fontWeight: 800, display: { xs: 'none', sm: 'block' } }}>
                Easy <span>ＣᗩＲ</span> Rental
              </Typography>

              <Typography variant="h6" component="div"
                  sx={{ flexGrow: 1, fontFamily: 'Arial, Helvetica, sans-serif',fontWeight: 500, display: { xs: 'none', sm: 'block' } }}>
                <span className="lblEmail">{this.state.userData}</span>
              </Typography>

              <Link to="/custdash" style={{ color:'white', textDecoration: "none"}} >
                <Button className="custBtn" color="inherit">Profile</Button>
              </Link>

              <Link to="/generalcar" style={{ color:'white', textDecoration: "none"}}>
                <Button className="custBtn" color="inherit">Cars</Button>
              </Link>

              <Button
                className="custBtn"
                color="inherit"
                onClick={() => {
                  this.LogOutAction()
                }}
                >LogOut
              </Button>

            </Toolbar>
          </AppBar>
        </Box>
      );
    }
}
export default  CustomNavbar