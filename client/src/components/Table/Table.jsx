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
            <td>{isedit}</td>
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
                    <th>Thời gian (dd-mm-yy)</th>
                    <th>Số tiền</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                </tr>
            </thead>

            <tbody>
                {data.map((dataFake) => (
                    <tr key={dataFake.id}>
                        {isedit === dataFake.id ? (
                            renderEditForm()
                        ) : (
                            <Fragment>
                                <td>
                                    <p>{dataFake.id}</p>
                                </td>
                                <td>
                                    <p>{dataFake.title}</p>
                                </td>
                                <td>
                                    <p>{dataFake.date}</p>
                                </td>
                                <td>
                                    <p>{dataFake.moeny}</p>
                                </td>
                                <td>
                                    <button onClick={() => handleEdit(dataFake.id)}>Sửa</button>
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
