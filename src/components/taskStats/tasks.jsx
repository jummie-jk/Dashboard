import React from "react";
import inactive from '../../images/inactive.png'
import './tasks.scss'
const Tasks = () => {
    return (
      <div className="tasks">
         <div className="taskText">
            <div className="taskdetails">
                <h3 className="task-main">Tasks</h3>
                <p className="taskdetails-p">View All</p>
            </div>
            <div>
                <p className="today">Today</p>
            </div>
            <div className="contents">
                <div className="content">
                    <p>Create new task</p>
                    <img src={inactive} alt="inactive-icon"/>
                </div>
                <div className="content">
                    <p>Finish ticket update</p>
                    <button className="btn btn-yellow">URGENT</button>
                </div>
                <div className="content">
                    <p>Create new ticket example</p>
                    <button className="btn btn-green">NEW</button>
                </div>
                <div className="content">
                    <p>Update ticket report</p>
                    <button className="btn btn-default">DEFAULT</button>
                </div>
            </div>
         </div>
      </div>
    );
  }
  
export default Tasks;