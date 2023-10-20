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
const SideBar = () => {
    return (
      <div className="sidebar">
        <div className="top">
            <img src={logo} alt="logo" className="logo-main"/>
            <span className="logo">Dashboard Kit</span>
        </div>
        <div className="center">
            <ul>
                <li>
                    <PieChartIcon className="icon"/>
                    <span>Overview</span>
                </li>
                <li>
                    <ConfirmationNumberIcon className="icon"/>
                    <span>Ticket</span>
                </li>
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