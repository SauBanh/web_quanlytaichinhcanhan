import React from 'react';

import classNames from 'classnames/bind';
import styles from './SpedingTable.module.scss';
const cx = classNames.bind(styles);

function SpedingTable() {
    return (
        <div className={cx('warpper')}>
            <table>
                <thead>
                    <tr className={cx('nonehover')}>
                        <th>Stt</th>
                        <th>Loại doanh thu</th>
                        <th>Ngày thêm</th>
                        <th>Số tiền</th>
                        <th>Chi tiết</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <p>1</p>
                        </td>
                        <td>
                            <p>1</p>
                        </td>
                        <td>
                            <p>1</p>
                        </td>
                        <td>
                            <p>1</p>
                        </td>
                        <td>
                            <p>1</p>
                        </td>
                        <td>
                            <button>Sửa</button>
                        </td>
                        <td>
                            <button>Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SpedingTable;
