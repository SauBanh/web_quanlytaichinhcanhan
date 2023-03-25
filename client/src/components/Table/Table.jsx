import React, { useState, useRef, Fragment } from 'react';

import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

function Table({ data }) {
    const [isedit, setIsedit] = useState();

    const inputElement = useRef();

    const handleEdit = (id) => {
        setIsedit(id);
    };

    const renderEditForm = () => (
        <Fragment>
            <td></td>
            <td>
                <input ref={inputElement} type="text" />
            </td>
            <td>{/* <input type="text" /> */}</td>
            <td>
                <input type="text" />
            </td>
            <td>
                <button>Cập nhật</button>
            </td>
            <td>
                <button
                    onClick={() => {
                        setIsedit();
                    }}
                >
                    Hủy
                </button>
            </td>
        </Fragment>
    );

    return (
        <table>
            <thead>
                <tr className={cx('nonehover')}>
                    <th>Stt</th>
                    <th>Loại doanh thu</th>
                    <th>Ngày thêm</th>
                    <th>Số tiền</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                </tr>
            </thead>

            <tbody>
                {data.map((dataFake, index) => (
                    <tr key={dataFake.idr}>
                        {isedit === dataFake.idr ? (
                            renderEditForm()
                        ) : (
                            <Fragment>
                                <td>
                                    <p>{index + 1}</p>
                                </td>
                                <td>
                                    <p>{dataFake.name}</p>
                                </td>
                                <td>
                                    <p>{dataFake.adddate}</p>
                                </td>
                                <td>
                                    <p>{dataFake.value}</p>
                                </td>
                                <td>
                                    <button onClick={() => handleEdit(dataFake.idr)}>Sửa</button>
                                </td>
                                <td>
                                    <button>Xóa</button>
                                </td>
                            </Fragment>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
