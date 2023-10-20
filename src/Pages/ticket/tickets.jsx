import React from "react";
import './tickets.scss'
import SideBar from "../../components/sidebar/sidebar";
import NavBar from "../../components/navbar/Navbar";
import TicketTable from "../../components/TicketsTable/ticketTable";

const Tickets = () => {
    return (
      <div className="tickets">
        <SideBar/>
        <div className="ticketContainer">
          <NavBar title='Tickets'/>
          <TicketTable/>
        </div>
      </div>
    );
  }
  
export default Tickets;
  