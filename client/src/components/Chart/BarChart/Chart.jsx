import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import * as statistical from '../../../utils/apiServices/statistical';
import Cookies from 'js-cookie';

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
    const [apiTop7, setApiTop7] = useState([]);

    const token = Cookies.get('token');

    useEffect(() => {
        const getapiTop7Revenue = async () => {
            const result = await statistical.getTop7Revenue(token);
            if (result.status === 200) {
                const chartTop7 = result.data.data.map((item) => {
                    return {
                        // id: item.idr,
                        name: item.name,
                        value: item.value,
                    };
                });
                // console.log(chartTop7);
                setApiTop7(chartTop7);
            } else if (result.status === 403) {
                console.log('token hết hạn');
            }
        };
        getapiTop7Revenue();
    }, []);
    return (
        <BarChart
            width={1000}
            height={500}
            data={apiTop7}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            barSize={50}
        >
            <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 50 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="value" fill="#1976d2" background={{ fill: '#eee' }} />
        </BarChart>
    );
}
