import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import styles from './Revenue.module.scss';
import classNames from 'classnames/bind';

import * as revenueServices from '../../utils/apiServices/revenueServices';
import Wrapper from '../../components/Wrapper/Wrapper';
import TableData from '../../components/Table/Table';

const cx = classNames.bind(styles);

const Revenue = () => {
    const [revenueMonth, setRevenueMonth] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));

    const titleTable = 'doanh thu cá nhân';

    const linkPage = '/revenue/';

    const token = Cookies.get('token');

    const columns = [
        {
            id: 1,
            name: 'Stt',
        },
        {
            id: 2,
            name: 'Doanh thu',
        },
        {
            id: 3,
            name: 'Ngày thêm',
        },
        {
            id: 4,
            name: 'Số Tiền',
        },
        {
            id: 5,
            name: 'Mô tả chi tiết',
        },
        {
            id: 6,
            name: 'Action',
        },
    ];

    useEffect(() => {
        setIsLoading(true);
        const getapiRevenue = async () => {
            const result = await revenueServices.getRevenues(token);
            if (result.status === 200) {
                setRevenueMonth(
                    result.data.revenues.map((data, index) => {
                        return {
                            stt: index + 1,
                            uid: data.id,
                            id: data.idr,
                            adddate: data.adddate,
                            name: data.name,
                            value: data.value,
                            desc: data.desc,
                        };
                    }),
                );
                setIsLoading(false);
            } else if (result.status === 403) {
                console.log('token hết hạn');
            }
        };
        getapiRevenue();
    }, []);

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
        console.log(id);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
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
                        <div style={{ width: '100%', transform: 'translateY(75px)' }}>
                            <Wrapper>
                                <Box sx={{ width: '100%' }}>
                                    <Skeleton height={'80px'} animation="wave" />
                                    <Skeleton height={'80px'} animation="wave" />
                                    <Skeleton height={'80px'} animation="wave" />
                                    <Skeleton height={'80px'} animation="wave" />
                                    <Skeleton height={'80px'} animation="wave" />
                                </Box>
                            </Wrapper>
                        </div>
                    </div>
                ) : (
                    <Wrapper>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <TableData
                                delid={getidr}
                                columns={columns}
                                titleTable={titleTable}
                                datarows={revenueMonth}
                                pageLink={linkPage}
                            />
                        </div>
                    </Wrapper>
                )}
            </div>
        </div>
    );
};

export default Revenue;
