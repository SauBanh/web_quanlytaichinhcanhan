import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush, AreaChart, Area } from 'recharts';

export default function LineChartt({ data }) {
    return (
        <div>
            <h4>A demo of synchronized AreaCharts</h4>
            <LineChart
                width={1000}
                height={300}
                data={data}
                syncId="anyId"
                margin={{
                    top: 10,
                    right: 30,
                    left: 30,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#1976d2" fill="#d8edff" />
                {/* <Brush /> */}
            </LineChart>
        </div>
    );
}
