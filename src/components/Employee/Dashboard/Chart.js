import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'COE',
    pending: 4000,
    completed: 2400,
    amt: 2400,
  },
  {
    name: 'COC',
    pending: 3000,
    completed: 1398,
    amt: 2210,
  },
  {
    name: 'CAF',
    pending: 2000,
    completed: 9800,
    amt: 2290,
  },
  {
    name: 'CAL',
    pending: 2780,
    completed: 3908,
    amt: 2000,
  },
  {
    name: 'CBA',
    pending: 1890,
    completed: 4800,
    amt: 2181,
  },
];


const Chart = () => {
    

    return (
        
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
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
          <Bar dataKey="completed" stackId="a" fill="#28A745" />
          <Bar dataKey="pending" stackId="a" fill="#DC3545" />
        </BarChart>
      
    )
}


export default Chart;