import React from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className='grid grid-cols-2 justify-items-center mt-20'>
            <LineChart height={350} width={350} data={data}>
                <Line dataKey={'revenue'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis dataKey={'investment'}></YAxis>
                <Tooltip />
            </LineChart>
            
            <BarChart width={350} height={350} data={data}>
            <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
         
        </BarChart>

        <PieChart width={350} height={350}>
          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Tooltip />
        </PieChart>
        </div>
    );
};

export default DashBoard;