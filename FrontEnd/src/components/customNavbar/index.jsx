import {Component} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


class CustomNavbar extends Component{

    constructor(props) {
        super(props);
    }

    render(){
  
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

              <Link to="/custdash" style={{ color:'white', textDecoration: "none"}} >
                <Button color="inherit">DashBoard</Button>
              </Link>

              <Link to="/generalcar" style={{ color:'white', textDecoration: "none"}}>
                <Button color="inherit">Cars</Button>
              </Link>

              <Link to="/" style={{ color:'white', textDecoration: "none"}}>
                <Button color="inherit">LogOut</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }
}
export default  CustomNavbar