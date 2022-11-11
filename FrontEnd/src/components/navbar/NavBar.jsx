import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Menu from "../../assets/img/icons8_Menu.png"
import CarLogo from "../../assets/img/icons8_car_200px.png"

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo"><img src={CarLogo} height={50} width={50} alt=''/></div>
            <NavLink exact to="/" className="nav-logo">
              Easy <span>ＣᗩＲ</span> Rental
              <i className="fas fa-code"></i>
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/a"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/visit"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Cars
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/sign"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Sign
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Login
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}><img src={Menu} height={40} width={40} alt=''/></i>
            </div>
          </div>
        </nav>
      </>
    );
}

export default NavBar
