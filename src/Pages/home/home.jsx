import React from "react";
import "./Home.scss"
import SideBar from "../../components/sidebar/sidebar";
import NavBar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/widget";
import FeaturedChart from "../../components/featured-chart/featuredCharts";
import Chart from "../../components/Chart/chart";
import Tasks from "../../components/taskStats/tasks";
import Unresolved from "../../components/unresolvedStats/unresolved";

const Home = () => {
    return (
      <div className="home">
         <SideBar/>
         <div className="homeContainer">
            <NavBar title='Overview'/>
            <div className="widgets">
                <Widget type='unresolved'/>
                <Widget type='overdue'/>
                <Widget type='open'/>
                <Widget type='onhold'/>
            </div>
            <div className="charts">
             <Chart/>
             <FeaturedChart/>
            </div>
            <div className="statistics">
              <Unresolved/>
              <Tasks/>
            </div>
        </div>
      </div>
    );
  }
  
export default Home;
  