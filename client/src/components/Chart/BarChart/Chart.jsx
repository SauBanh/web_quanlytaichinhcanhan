import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import numeral from 'numeral';

const formatPrice = (value) => {
    return numeral(value).format('0,0[.]00 ₫');
};

const formatYAxis = (tickItem) => {
    return formatPrice(tickItem);
};

export default function Chart({ data }) {
    return (
        <>
            {data.length === 0 ? (
                <h3>Chưa có dữ liệu để hiển thị biểu đồ hãy tạo dữ liệu</h3>
            ) : (
                <>
                    <BarChart
                        width={1000}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 10,
                            left: 90,
                            bottom: 5,
                        }}
                        barSize={30}
                    >
                        <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 50 }} />
                        <YAxis tickFormatter={formatYAxis} />
                        <Tooltip
                            formatter={(value) =>
                                new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
                            }
                        />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="value" fill="#1976d2" background={{ fill: '#d8edff' }} />
                    </BarChart>
                </>
            )}
        </>
    );
}
