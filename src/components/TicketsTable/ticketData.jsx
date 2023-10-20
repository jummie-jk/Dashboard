import header from "../navbar/_header.png";
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {field: 'user', headerName: 'ticket Details', width: 300, renderCell:(params) => {
        return(
            <div className="cellWithImg">
                <img src={params.row.img} alt='avatar' className="cellImg" />
                <div>
                    <p>{params.row.ticketName}</p>
                    <p> {params.row.ticketDetails}</p>
                </div>
            </div>
        )
    }},
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'priority', headerName: 'Priority', width: 150 },
];

export const userRows = [
  {
    id: 1,
    ticketName: "Contact Email not Linked",
    ticketDetails: "on 24.05.2019",
    img: header,
    name: "Tom Cruise",
    date: "May 26, 2019",
    priority: "high",
  },
  {
    id: 1,
    ticketName: "Contact Email not Linked",
    ticketDetails: "on 24.05.2019",
    img: header,
    name: "Tom Cruise",
    date: "May 26, 2019",
    priority: "high",
  },
  {
    id: 1,
    ticketName: "Contact Email not Linked",
    ticketDetails: "on 24.05.2019",
    img: header,
    name: "Tom Cruise",
    date: "May 26, 2019",
    priority: "high",
  },
  {
    id: 1,
    ticketName: "Contact Email not Linked",
    ticketDetails: "on 24.05.2019",
    img: header,
    name: "Tom Cruise",
    date: "May 26, 2019",
    priority: "high",
  },
  {
    id: 1,
    ticketName: "Contact Email not Linked",
    ticketDetails: "on 24.05.2019",
    img: header,
    name: "Tom Cruise",
    date: "May 26, 2019",
    priority: "high",
  },
  {
    id: 1,
    ticketName: "Contact Email not Linked",
    ticketDetails: "on 24.05.2019",
    img: header,
    name: "Tom Cruise",
    date: "May 26, 2019",
    priority: "high",
  },
  {
    id: 1,
    ticketName: "Contact Email not Linked",
    ticketDetails: "on 24.05.2019",
    img: header,
    name: "Tom Cruise",
    date: "May 26, 2019",
    priority: "high",
  },
  {
    id: 1,
    ticketName: "Co