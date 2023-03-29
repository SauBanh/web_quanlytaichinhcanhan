import React, { useState, useRef, Fragment } from 'react';
// import { DataGrid } from '@mui/x-data-grid';

import Button from '@mui/material/Button';

import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

// const columns = [
//     { field: 'id', headerName: 'Stt', width: 70 },
//     { field: 'firstName', headerName: 'Loại doanh thu', width: 130 },
//     { field: 'lastName', headerName: 'Ngày thêm', width: 130 },
//     {
//         field: 'age',
//         headerName: 'Số tiền',
//         type: 'number',
//         width: 90,
//     },
//     {
//         field: 'fullName',
//         headerName: 'Chi tiết',
//         //   description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
// ];

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
                <Button onClick={handleChange}>Cập nhật</Button>
            </td>
            <td>
                <Button
                    onClick={() => {
                        setIsedit();
                    }}
                >
                    Hủy
                </Button>
            </td>
        </Fragment>
    );

    // const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];

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
        // <div style={{ height: 400, width: '100%' }}>
        //     <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        // </div>
    );
}

export default Table;
