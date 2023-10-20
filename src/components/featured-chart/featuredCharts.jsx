import React from "react";
import './featuredChart.scss'
import Widget from '../widget/widget.jsx'

const FeaturedChart = ({type}) => {
 
    return (
      <div className="featuredChart">
         <div className="widgets">
                <Widget type='resolved'/>
                <Widget type='received'/>
                <Widget type='average'/>
                <Widget type='averagee'/>
                <Widget type='resolution'/>
          </div>
      </div>
    );
  }
  
export default FeaturedChart;