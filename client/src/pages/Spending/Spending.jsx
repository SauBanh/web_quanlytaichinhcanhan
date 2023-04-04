import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import styles from './Spending.module.scss';
import classNames from 'classnames/bind';

import * as spendingServices from '../../utils/apiServices/spendingServices';
import Wrapper from '../../components/Wrapper/Wrapper';
import TableData from '../../components/Table/Table';

const cx = classNames.bind(styles);

const Spending = () => {
    const [spending, setSpending] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));

    const token = Cookies.get('token');

    const titleTable = 'chi tiêu cá nhân';

    const linkPage = '/spendings/';

    const columns = [
        {
            id: 1,
            name: 'Stt',
        },
        {
            id: 2,
            name: 'Chi tiêu',
        },
        {
            id: 3,
            name: 'Ngày thêm',
        },
        {
            id: 4,
            name: 'Loại chi tiêu',
        },
        {
            id: 5,
            name: 'Số Tiền',
        },
        {
            id: 6,
            name: 'Mô tả chi tiết',
        },
        {
            id: 7,
            name: 'Action',
        },
    ];

    useEffect(() => {
        setIsLoading(true);
        async function fetchData() {
            const getApiSpending = async () => {
                const result = await spendingServices.getSpendings(token);
                if (result.status === 200) {
                    setSpending(
                        result.data.spendings.map((data, index) => {
                            return {
                                stt: index + 1,
                                uid: data.id,
                                id: data.ids,
                                idc: data.idc,
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
            await getApiSpending();
        }
        fetchData();
    }, []);

    const getidr = (id) => {
        const currentUser = user.id;
        const delRevenue = async () => {
            const result = await spendingServices.delSpending(id, currentUser, token);
            if (result.status === 200) {
                console.log('xóa thành công');
                const newData = spending.filter((item) => item.ids !== id);
                setSpending(newData);
            }
        };
        delRevenue();
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
                                datarows={spending}
                                pageLink={linkPage}
                            />
                        </div>
                    </Wrapper>
                )}
            </div>
        </div>
    );
};

export default Spending;
