import React from 'react';

import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

function Table({ data }) {
    return (
        <table>
            <thead>
                <tr className={cx('nonehover')}>
                    <th>Stt</th>
                    <th>Loại doanh thu</th>
                    <th>Thời gian (dd-mm-yy)</th>
                    <th>Số tiền</th>
                    <th>Chỉnh sửa</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody>
                {data.map((dataFake, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{dataFake.title}</td>
                        <td>{dataFake.date}</td>
                        <td>{dataFake.moeny}</td>
                        <td>
                            <span>Chỉnh sửa</span>
                        </td>
                        <td>
                            <span>Xóa</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
