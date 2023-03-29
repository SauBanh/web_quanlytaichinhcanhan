import React, { useState, useRef, Fragment } from 'react';

import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

function Table({ getidr, sendData, data }) {
    const [isedit, setIsedit] = useState();
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    const inputElement = useRef();

    const handleEdit = (id) => {
        setIsedit(id);
    };

    const handleChange = () => {
        const dataChange = {
            name: input1,
            value: input2,
            description: input3,
        };
        sendData(dataChange, isedit);
        setIsedit();
        setInput1('');
        setInput2('');
        setInput3('');
    };

    const renderEditForm = () => (
        <Fragment>
            <td></td>
            <td>
                <input
                    ref={inputElement}
                    type="text"
                    value={input1}
                    required
                    onChange={(e) => setInput1(e.target.value)}
                />
            </td>
            <td></td>
            <td>
                <input type="number" value={input2} min="1" required onChange={(e) => setInput2(e.target.value)} />
            </td>
            <td>
                <input type="text" value={input3} required onChange={(e) => setInput3(e.target.value)} />
            </td>
            <td>
                <button onClick={handleChange}>Cập nhật</button>
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
                                        <p>{dataFake.desc}</p>
                                    </td>
                                    <td>
                                        <button onClick={() => handleEdit(dataFake.idr)}>Sửa</button>
                                    </td>
                                    <td>
                                        <button onClick={() => getidr(dataFake.idr)}>Xóa</button>
                                    </td>
                                </Fragment>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
