import header from "../../images/_header.png";
import image1 from '../../images/m1.png'
import image2 from '../../images/m2.png'
import image3 from '../../images/m3.png'
import image4 from '../../images/m4.png'
import image5 from '../../images/m5.png'
import image6 from '../../images/m6.png'
import image7 from '../../images/m7.png'
import image8 from '../../images/m8.png'
import menu from "../../images/menu.png";
//Columns
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

//Rows
export const userRows = [
  {
    id: 1,
    ticketName: "Contact Email not Linked",
    ticketDetails: "Updated 1 day ago",
    img: image1,
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
    img: image2,
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
    img: image3,
    name: "Robert Downey",
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
    img: image4,
    name: "Christian Bale",
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
    img: image5,
    name: "Henry Cavil",
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
    img: image6,
    name: "Chris Evans",
    nameSub: 'on 24.05.2019',
    date: "May 26, 2019",
    time: '6:30 PM',
    priority: "normal",
    menu: menu
  },
  {
    id: 7,
    ticketName: "Referral Bonus",
    ticketDetails: "Updated 4 days ago",
    img: image7,
    name: "Sam Smith",
    nameSub: 'on 24.05.2019',
    date: "May 26, 2019",
    time: '6:30 PM',
    priority: "low",
    menu: menu
  },
  {
    id: 8,
    ticketName: "How do I change my password?",
    ticketDetails: "Updated 6 days ago",
    img: image8,
    name: "Steve Rogers",
    nameSub: 'on 24.05.2019',
    date: "May 26, 2019",
    time: '6:30 PM',
    priority: "normal",
    menu: menu
  },
  {
    id: 9,
    ticketName: "How do I change my password?",
    ticketDetails: "Updated 6 days ago",
    img:image8,
    name: "Steve Rogers",
    nameSub: 'on 24.05.2019',
    date: "May 26, 2019",
    time: '6:30 PM',
    priority: "normal",
    menu: menu
  },
  {
    id: 10,
    ticketName: "How do I change my password?",
    ticketDetails: "Updated 6 days ago",
    img: header,
    name: "Steve Rogers",
    nameSub: 'on 24.05.2019',
    date: "May 26, 2019",
    time: '6:30 PM',
    priority: "normal",
    menu: menu
  },
  {
    id: 11,
    ticketName: "How do I change my password?",
    ticketDetails: "Updated 6 days ago",
    img: image4,
    name: "Steve Rogers",
    nameSub: 'on 24.05.2019',
    date: "May 26, 2019",
    time: '6:30 PM',
    priority: "normal",
    menu: menu
  },
  {
    id: 12,
    ticketName: "How do I change my password?",
    ticketDetails: "Updated 6 days ago",
    img:image1,
    name: "Steve Rogers",
    nameSub: 'on 24.05.2019',
    date: "May 26, 2019",
    time: '6:30 PM',
    priority: "normal",
    menu: menu
  },
  {
    id: 13,
    ticketName: "How do I change my password?",
    ticketDetails: "Updated 6 days ago",
    img: image7,
    name: "Steve Rogers",
    nameSub: 'on 24.05.2019',
    date: "May 26, 2019",
    time: '6:30 PM',
    priority: "normal",
    menu: menu
  },
];
