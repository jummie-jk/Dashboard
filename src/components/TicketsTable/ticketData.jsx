import header from "../navbar/_header.png";
import menu from "../navbar/menu.png";
export const userColumns = [
    {field: 'user', headerName: 'Ticket Details', width: 450, renderCell:(params) => {
        return(
            <div className="cellWithImg">
                <img src={params.row.img} alt='avatar' className="cellImg" />
                <div>
                    <p className="ticket-name">{params.row.ticketName}</p>
                    <p className="ticket-details"> {params.row.ticketDetails}</p>
                </div>
            </div>
        )
    }},
    { field: 'name', headerName: "Customer's name", width: 200, renderCell:(params) => {
        return(
            <div className="nameBlock">
                <div>
                    <p className="ticket-name">{params.row.name}</p>
                    <p className="ticket-details"> {params.row.nameSub}</p>
                </div>
            </div>
        )
    } },
    { field: 'date', headerName: 'Date', width: 150,
    renderCell:(params) => {
        return(
            <div className="dateBlock">
                <div>
                  
                    <p className="ticket-name">{params.row.date}</p>
                    <p className="ticket-details">{params.row.time}</p>
                </div>
            </div>
        )
    } },
    { field: 'priority', headerName: 'Priority', width: 150, 
    renderCell:(params) => {
        return(
            <div className={`cellWithStatus ${params.row.priority}`}>
              {params.row.priority}
            </div>
        )
    }
},
    { field: 'avatar', headerName: '', width: 50,  renderCell:(params) => {
        return(
            <div className="menu">
                 <img src={params.row.menu} alt='avatar' className="cellImg" />
            </div>
        )
    } },
];

export const userRows = [
  {
    id: 1,
    ticketName: "Contact Email not Linked",
    ticketDetails: "Updated 1 day ago",
    img: header,
    name: "Tom Cruise",
    nameSub: 'on 24.05.2019',
    date: "May 26, 2019",
    time: '6:30 PM',
    priority: "high",
    menu: menu
  },
  {
    id: 2,
    ticketName: "Adding Images to Featured Posts",
    ticketDetails: "Updated 1 day ago",
    img: header,
    name: "Matt Damon",
    nameSub: 'on 24.05.2019',
    date: "May 26, 2019",
    time: '6:30 PM',
    priority: "low",
    menu: menu
  },
  {
    id: 3,
    ticketName: "When will I be charged this month?",
    ticketDetails: "Updated 1 day ago",
    img: header,
    name: "Tom Cruise",
    nameSub: 'on 24.05.2019',
    date: "May 26, 2019",
    time: '6:30 PM',
    priority: "high",
    menu: menu
  },
  {
    id: 4,
    ticketName: "Contact Payment not going through",
    ticketDetails: "Updated 1 day ago",
    img: header,
    name: "Tom Cruise",
    nameSub: 'on 24.05.2019',
    date: "May 26, 2019",
    time: '6:30 PM',
    priority: "normal",
    menu: menu
  },
  {
    id: 5,
    ticketName: "Unable to add replies",
    ticketDetails: "Updated 2 days ago",
    img: header,
    name: "Tom Cruise",
    nameSub: 'on 24.05.2019',
    date: "May 26, 2019",
    time: '6:30 PM',
    priority: "high",
    menu: menu
  },
  {
    id: 6,
    ticketName: "Downtime since last week",
    ticketDetails: "Updated 3 days ago",
    img: header,
    name: "Tom Cruise",
    nameSub: 'on 24.05.2019',
    date: "6:30 PM",
    time: 'May 26, 2019',
    priority: "normal",
    menu: menu
  },
  {
    id: 7,
    ticketName: "Referral Bonus",
    ticketDetails: "Updated 4 days ago",
    img: header,
    name: "Tom Cruise",
    nameSub: 'on 24.05.2019',
    date: "6:30 PM",
    time: 'May 26, 2019',
    priority: "low",
    menu: menu
  },
  {
    id: 8,
    ticketName: "How do I change my password?",
    ticketDetails: "Updated 6 days ago",
    img: header,
    name: "Tom Cruise",
    nameSub: 'on 24.05.2019',
    date: "6:30 PM",
    time: 'May 26, 2019',
    priority: "normal",
    menu: menu
  },
];
