import { Component, Fragment } from "react";
import Navbar from "../../components/navbar/NavBar";
import "./home.css"
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
import EmojiEventsSharpIcon from '@mui/icons-material/EmojiEventsSharp';
import Bottom from "../../components/bottom/Bottom";
import { Link } from "react-router-dom";
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';


class HomePage extends Component {

    render() {
        return (
            <Fragment >
                <div><Navbar /></div>

                <div className="home">
                    <div class="home-content">
                        <div class="text-1">Best cars for speciel occations</div>
                        <div class="text-2">Easy <span>ＣᗩＲ</span>  Rental</div>
                        <div class="text-3">Lorem ipsum, dolor sit amet consect <br /> adipisicing elit. <br /> </div>
                        <div className="text-4" >
                            <StarBorderPurple500OutlinedIcon style={{fontSize:"40px", color:'yellow'}} />
                            <StarBorderPurple500OutlinedIcon style={{fontSize:"40px", color:'yellow'}} />
                            <StarBorderPurple500OutlinedIcon style={{fontSize:"40px", color:'yellow'}} />
                            <StarBorderPurple500OutlinedIcon style={{fontSize:"40px", color:'yellow'}} />
                            <StarBorderPurple500OutlinedIcon style={{fontSize:"40px", color:'yellow'}} />
                        </div>
                        <Link to="/login" style={{textDecoration: "none", color:'white'}} ><div class="btn">Book Now</div></Link>
                    </div>
                </div>

                <div className="services">
                    <div className="serv-content">
                        <div className="card">
                            <div className="box">
                                <DiamondSharpIcon style={{ fontSize: '60px', color:'rgb(253, 253, 85)' }} />
                                <div className="text">Club Economy</div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <ElectricCarIcon style={{ fontSize: '60px', color:'rgb(253, 253, 85)' }} />
                                <div className="text">Book Safe And Easy</div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <EmojiEventsSharpIcon style={{ fontSize: '60px', color:'rgb(253, 253, 85)' }} />
                                <div className="text">Leading experts</div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Bottom />
            </Fragment>
        )
    }
}

export default HomePage