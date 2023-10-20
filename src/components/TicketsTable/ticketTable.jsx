
import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import './ticketTable.scss'
import { userColumns, userRows } from "./ticketData";

const TicketTable = () => {
    return (
      <div className="ticketTable">
        <div className="ticketTitle">
            <h3 lassName="ticketTextMain">
                All Tickets
            </h3>
            <div className="ticketTextP">
                <p>Sort</p>
                <p>Filter</p>
            </div>
        </div>
        {/* <div style={{ height: 400, width: '100%' }}> */}
            <DataGrid
                rows={userRows}
                columns={userColumns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 8 },
                },
                }}
                pageSizeOptions={[8, 10]}
            />
    {/* </div> */}
      </div>
    );
  }
  
export default TicketTable;