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


class CustomNavbar extends Component{

    constructor(props) {
        super(props);
        this.state = {

          open: false,
          message: '',
          severity: '',

          data: [],
          
      }
      this.LogOutAction = this.LogOutAction.bind(this);
    }

    
    loadData = async () => {
      let res = await LoginService.fetchLogin();
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

    LogOutAction= async (email) =>{
      let params = {
        email: email
      }
      let res = await LoginService.deleteLogin(params);
        if (res.status === 200) {
              this.setState({
                  alert: true,
                  message: 'done',
                  severity: 'success'
              });
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
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{backgroundImage: 'linear-gradient(to right top, #402baa, #3b39b6, #3546c1, #2e53cc, #255fd7)' }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                <AccountCircle />
              </IconButton>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'monospace',fontWeight: 700,letterSpacing: '.1rem', }}>
                Easy Car Rental 
                
              </Typography> 
              {/* <h1>{this.props.email}</h1> */}
             

              <Link to="/custdash" style={{ color:'white', textDecoration: "none"}} >
                <Button color="inherit">DashBoard</Button>
              </Link>

              <Link to="/generalcar" style={{ color:'white', textDecoration: "none"}}>
                <Button color="inherit">Cars</Button>
              </Link>

             
              <Button
                color="inherit"
                onClick={() => {
                  this.LogOutAction(this.state.data[0].email)
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