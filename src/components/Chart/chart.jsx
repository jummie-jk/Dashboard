import React from "react";
import "./chart.scss";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Data for the charts
const data = [
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "6",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "7",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
// Getting the date dynamically
const currentDate = new Date();
console.log()
const Chart = () => {
  
  return (
    <>
    <div className="chart">
        <div className="title">
          <div className="title-main">
            <h3>Today’s trends</h3>
            <p>as of {currentDate.toLocaleString()} </p>
          </div>
         <div className="days">
          <p>Today</p>
          <p>Yesterday</p>
         </div>
        </div>
        <ResponsiveContainer width='100%' aspect={2/1}>
          <AreaChart
            width={550}
            height={200}
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DFE0EB" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#DFE0EB" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3751FF" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#3751FF" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            //blue #8884d8
            //green #82ca9d
            //blue main #3751FF 
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#DFE0EB"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#3751FF"
              fillOpacity={0.5}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      </>
  );
};

export default Chart;
