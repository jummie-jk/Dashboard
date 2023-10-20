import React from "react";
import "./sidebar.scss"
import logo from '../navbar/logo.png'
import PieChartIcon from '@mui/icons-material/PieChart';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupsIcon from '@mui/icons-material/Groups';
import Person2Icon from '@mui/icons-material/Person2';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Link } from "react-router-dom";
const SideBar = () => {
    return (
      <div className="sidebar">
        <div className="top">
            <img src={logo} alt="logo" className="logo-main"/>
            <Link to='/' style={{textDecoration: 'none'}} className="nav-link"><span className="logo">Dashboard Kit</span></Link>
        </div>
        <div className="center">
            <ul>
            <Link to='/' style={{textDecoration: 'none'}} className="nav-link">
                <li>
                    <PieChartIcon className="icon"/>
                    <span>Overview</span>
                </li>
            </Link>
                <Link to='/tickets' style={{textDecoration: 'none'}}>
                    <li>
                        <ConfirmationNumberIcon className="icon"/>
                        <span>Ticket</span>
                    </li>
                </Link>
              
                <li>
                    <EmojiObjectsIcon className="icon"/>  
                    <span>Ideas</span>
                </li>
                <li>
                    <GroupsIcon className="icon"/>  
                    <span>Contact</span>
                </li>
                <li>
                    <Person2Icon className="icon"/>  
                    <span>Agent</span>
                </li>
                <li>
                    <ArticleIcon className="icon"/> 
                    <span>Articles</span>
                </li>
            </ul>
        </div>
        <div className="buttom">
        <hr className="hr"/>
            <ul>
                <li>
                    <SettingsIcon className="icon"/> 
                    <span>Settings</span>
                </li>
                <li>
                    <EmojiEventsIcon className="icon"/>
                    <span>Subscription</span>
                </li>
            </ul>
           
        </div>
      </div>
    );
  }
  
export default SideBar;