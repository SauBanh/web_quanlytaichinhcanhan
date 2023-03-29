import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: 'Page A',
        pv: 2400,
    },
    {
        name: 'Page B',
        pv: 1398,
    },
    {
        name: 'Page C',
        pv: 9800,
    },
    {
        name: 'Page D',
        pv: 3908,
    },
    {
        name: 'Page E',
        pv: 4800,
    },
    {
        name: 'Page F',
        pv: 3800,
    },
    {
        name: 'Page G',
        pv: 4300,
    },
];

export default function Chart() {
    return (
        <BarChart
            width={900}
            height={500}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            barSize={20}
        >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
    );
}
