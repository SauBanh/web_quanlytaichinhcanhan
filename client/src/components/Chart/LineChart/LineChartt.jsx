import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import numeral from 'numeral';

const formatPrice = (value) => {
    return numeral(value).format('0,0[.]00 ₫');
};

const formatYAxis = (tickItem) => {
    return formatPrice(tickItem);
};

export default function LineChartt({ data }) {
    return (
        <div>
            {data.length === 0 ? (
                <h3>Chưa có dữ liệu để hiển thị biểu đồ hãy tạo dữ liệu</h3>
            ) : (
                <>
                    <div>
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
                            <YAxis tickFormatter={formatYAxis} />
                            <Tooltip
                                formatter={(value) =>
                                    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
                                }
                            />
                            <Line type="monotone" dataKey="value" stroke="#1976d2" fill="#d8edff" />
                            {/* <Brush /> */}
                        </LineChart>
                    </div>
                </>
            )}
        </div>
    );
}
