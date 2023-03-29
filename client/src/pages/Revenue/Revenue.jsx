import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Button from '@mui/material/Button';
// import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import Skeleton from '@mui/material/Skeleton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import styles from './Revenue.module.scss';
import classNames from 'classnames/bind';

import * as revenueServices from '../../utils/apiServices/revenueServices';
import Wrapper from '../../components/Wrapper/Wrapper';
import Table from '../../components/Table/Table';

const cx = classNames.bind(styles);

const Revenue = () => {
    const [isaddDT, setIsAddDT] = useState(false);
    // const [isAddThem, setIsAddThem] = useState(false);
    const [revenueMonth, setRevenueMonth] = useState([]);
    const [titleRevenue, setTitleReveue] = useState('');
    const [valueRevenue, setValueReveue] = useState('');
    const [descRevenue, setDescReveue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));

    const token = Cookies.get('token');

    useEffect(() => {
        setIsLoading(true);
        const getapiRevenue = async () => {
            const result = await revenueServices.getRevenue(token);
            if (result.status === 200) {
                setRevenueMonth(result.data.revenues);
                setIsLoading(false);
            } else if (result.status === 403) {
                console.log('token hết hạn');
            }
        };
        getapiRevenue();
    }, []);

    const handleAddRevenueMonth = (event) => {
        event.preventDefault();
        let d = new Date();
        const postRevenue = async () => {
            const currentUser = user.id;
            const result = await revenueServices.postRevenue(
                {
                    id: currentUser,
                    name: titleRevenue,
                    value: Number(valueRevenue),
                    adddate: d,
                    desc: descRevenue,
                },
                token,
            );
            if (result.status === 200) {
                setRevenueMonth((prev) => [...prev, result.data.revenue]);
                console.log('thêm thành công');
            }
        };
        postRevenue();
        setDescReveue('');
        setValueReveue('');
        setTitleReveue('');
        setIsAddDT(false);
    };

    const renderAddHangThang = () => (
        <div className={cx('formadd')}>
            <Wrapper>
                <form onSubmit={handleAddRevenueMonth}>
                    <input
                        type="text"
                        onChange={(e) => setTitleReveue(e.target.value)}
                        value={titleRevenue}
                        placeholder="Loại doanh thu"
                        required
                    />
                    <input
                        type="number"
                        onChange={(e) => setValueReveue(e.target.value)}
                        value={valueRevenue}
                        placeholder="Số tiền"
                        min="1"
                        required
                    />
                    <input
                        type="text"
                        onChange={(e) => setDescReveue(e.target.value)}
                        value={descRevenue}
                        placeholder="Chi tiết"
                        required
                    />
                    <button onClick={handleAddRevenueMonth}>Thêm</button>
                    <button onClick={() => setIsAddDT(!isaddDT)}>Hủy</button>
                </form>
            </Wrapper>
        </div>
    );

    const getidr = (id) => {
        const currentUser = user.id;
        const delRevenue = async () => {
            const result = await revenueServices.delRevenue(id, currentUser, token);
            if (result.status === 200) {
                console.log('xóa thành công');
                const newData = revenueMonth.filter((item) => item.idr !== id);
                setRevenueMonth(newData);
            }
            console.log(result);
        };
        delRevenue();
    };

    const sendData = (data, a) => {
        const currentUser = user.id;
        let d = new Date();
        var dd = d.getDate();
        var mm = d.getMonth() + 1; //January is 0!

        var yyyy = d.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = yyyy + '-' + mm + '-' + dd;
        const datachange = {
            adddate: d,
            ...data,
        };
        const putRevenue = async () => {
            const result = await revenueServices.putRevenue(a, currentUser, datachange, token);
            if (result.status === 200) {
                console.log('sửa thành công');
                console.log(result);
            }
        };
        const newData = revenueMonth.findIndex((item) => item.idr === a);
        revenueMonth[newData] = { adddate: today, idr: a, ...data };
        putRevenue();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <h2>Doanh thu hàng tháng</h2>
                    <Button onClick={() => setIsAddDT(!isaddDT)}>
                        <FontAwesomeIcon icon={faCirclePlus} />
                        <span>Thêm</span>
                    </Button>
                </div>
                {isaddDT && renderAddHangThang()}
                {isLoading ? (
                    <div
                        style={{
                            width: '100%',
                            height: '300px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div style={{ width: '100%', transform: 'translateY(40px)' }}>
                            <Wrapper>
                                <Box sx={{ width: '100%' }}>
                                    <Skeleton height={'70px'} animation="wave" />
                                    <Skeleton height={'70px'} animation="wave" />
                                    <Skeleton height={'70px'} animation="wave" />
                                    <Skeleton height={'70px'} animation="wave" />
                                    <Skeleton height={'70px'} animation="wave" />
                                </Box>
                            </Wrapper>
                        </div>
                    </div>
                ) : (
                    <Wrapper>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {/* {revenueMonth.length === 0 ? (
                                <p>Chưa tạo doanh thu tháng này</p>
                            ) : ( */}
                            <Table getidr={getidr} sendData={sendData} data={revenueMonth} />
                            {/* )} */}
                        </div>
                    </Wrapper>
                )}
            </div>
        </div>
    );
};

export default Revenue;
