import React from 'react';
import Button from '@mui/material/Button';

import classNames from 'classnames/bind';
import styles from './SpedingTable.module.scss';
const cx = classNames.bind(styles);

function SpedingTable({ dataFake }) {
    const categorys = [
        {
            idc: 1,
            name: 'Giải trí',
        },
        {
            idc: 2,
            name: 'Ăn uống',
        },
        {
            idc: 3,
            name: 'Sức khỏe',
        },
        {
            idc: 4,
            name: 'Mua sắm',
        },
        {
            idc: 5,
            name: 'Sinh hoạt',
        },
    ];
    return (
        <div className={cx('warpper')}>
            <table>
                <thead>
                    <tr className={cx('nonehover')}>
                        <th>Stt</th>
                        <th>Loại doanh thu</th>
                        <th>Ngày thêm</th>
                        <th>Danh mục</th>
                        <th>Số tiền</th>
                        <th>Chi tiết</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>

                <tbody>
                    {dataFake.map((data, index) => (
                        <tr key={index}>
                            <td>
                                <p>{index + 1}</p>
                            </td>
                            <td>
                                <p>{data.name}</p>
                            </td>
                            <td>
                                <p>{data.adddate}</p>
                            </td>
                            {/* {console.log(categorys[data.idc - 1])} */}
                            <td>
                                <p>{categorys[data.idc - 1].name}</p>
                            </td>
                            <td>
                                <p>1</p>
                            </td>
                            <td>
                                <p>1</p>
                            </td>
                            <td>
                                <Button>Sửa</Button>
                            </td>
                            <td>
                                <Button>Xóa</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SpedingTable;
