import React from "react";
import "./Navbar.scss";
import header from './_header.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
const NavBar = () => {
    return (
      <div className="navbar">
        <div className="wrapper">
            <div className="navTitle">Overview</div>
            <div className="navIconbar">
                <ul className="Iconbar">
                    <li><SearchIcon className="icon"/></li>
                    <li><NotificationsIcon className="icon"/></li>
                    <li className="navName">Jones Ferdinand</li>
                    <li><img src={header} alt="user" /></li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
  
export default NavBar;