import React from "react";
import './unresolved.scss'
const Unresolved = () => {
    return (
      <div className="unresolved">
         <div className="unresolvedText">
            <div className="details">
                <h3 className="details-main">Unresolved tickets</h3>
                <p className="details-p">View Details</p>
            </div>
            <div className="tickets">
                <p>Group: <span className="support">Support</span></p>
            </div>
            <div className="contents">
                <div className="content">
                    <p>Waiting on Feature Request</p>
                    <p className="num">4230</p>
                </div>
                <div className="content">
                    <p>Awaiting Customer Responset</p>
                    <p className="num">1005</p>
                </div>
                <div className="content">
                    <p>Awaiting Developer Fix</p>
                    <p className="num">914</p>
                </div>
                <div className="content">
                    <p>Pending</p>
                    <p className="num">281</p>
                </div>
            </div>
         </div>
      </div>
    );
  }
  
export default Unresolved;