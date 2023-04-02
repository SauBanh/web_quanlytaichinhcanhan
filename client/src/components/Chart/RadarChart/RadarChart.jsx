import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

export default function RadarChartt({ data }) {
    return (
        <RadarChart cx={250} cy={250} outerRadius={150} width={500} height={500} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#1976d2" fillOpacity={0.6} />
        </RadarChart>
    );
}
