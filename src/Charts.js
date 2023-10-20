import React from 'react'
import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import './Charts.css';

function Charts(){

    const data = [
        {
          name: 'Jan',
          lastYear: 4000,
          thisYear: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          lastYear: 3000,
          thisYear: 1398,
          amt: 2210,
        },
        {
          name: 'March',
          lastYear: 2000,
          thisYear: 9800,
          amt: 2290,
        },
        {
          name: 'April',
          lastYear: 2780,
          thisYear: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          lastYear: 1890,
          thisYear: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          lastYear: 2390,
          thisYear: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          lastYear: 3490,
          thisYear: 4300,
          amt: 2100,
        },
      ];

    return(
       <div className='charts'>

           <div className='chart card'>
           <h4 class="text-color card-title mb-5">Customer Analytics</h4>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={350}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="thisYear" fill="#1d67a4" />
                <Bar dataKey="lastYear" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
            </div>
            <div className='chart card'>
            <h4 class="text-color card-title mb-5">Service Analytics</h4>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={350}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="thisYear" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="lastYear" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Charts