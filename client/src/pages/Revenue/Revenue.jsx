import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

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
    const [isAddThem, setIsAddThem] = useState(false);
    const [revenueMonth, setRevenueMonth] = useState([]);
    const [titleRevenue, setTitleReveue] = useState('');
    const [valueRevenue, setValueReveue] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));

    const token = Cookies.get('token');

    useEffect(() => {
        const getapiRevenue = async () => {
            const result = await revenueServices.getRevenue(token);
            if (result.status === 200) {
                setRevenueMonth(result.data);
            } else {
                console.log('error');
            }
            // console.log(result);
        };
        getapiRevenue();
    }, []);

    // console.log(revenueMonth);s
    const datasFake = [
        {
            idr: 1,
            name: 'Lương tháng 1',
            adddate: '30-01-2023',
            value: 3000000,
        },
        {
            idr: 2,
            name: 'Lương tháng 2',
            adddate: '30-02-2023',
            value: 7000000,
        },
        {
            idr: 3,
            name: 'Lương tháng 3',
            adddate: '30-03-2023',
            value: 5000000,
        },
        {
            idr: 4,
            name: 'Lương tháng 4',
            adddate: '30-04-2023',
            value: 3000000,
        },
        {
            idr: 5,
            name: 'Lương tháng 5',
            adddate: '30-05-2023',
            value: 3000000,
        },
        {
            idr: 6,
            name: 'Lương tháng 6',
            adddate: '30-06-2023',
            value: 8000000,
        },
        {
            idr: 7,
            name: 'Lương tháng 7',
            adddate: '30-07-2023',
            value: 9000000,
        },
    ];

    const handleAddRevenueMonth = (event) => {
        event.preventDefault();
        var date = new Date();
        const postRevenue = async () => {
            const currentUser = user.id;
            const result = await revenueServices.postRevenue(
                {
                    idr: 0,
                    id: currentUser,
                    titleRevenue,
                    valueRevenue,
                    date,
                    description: '123',
                },
                token,
            );
            console.log(result);
        };
        postRevenue();
        // const dateCreate =
        // const month = date.getUTCMonth() + 1;
        // console.log(titleRevenue, valueRevenue, date);
    };

    const renderAddHangThang = () => (
        <div className={cx('formadd')}>
            <Wrapper>
                <form onSubmit={handleAddRevenueMonth}>
                    <input type="text" onChange={(e) => setTitleReveue(e.target.value)} placeholder="Loại doanh thu" />
                    <input type="number" onChange={(e) => setValueReveue(e.target.value)} placeholder="Số tiền" />
                    <button onClick={handleAddRevenueMonth}>Thêm</button>
                    <button onClick={() => setIsAddDT(!isaddDT)}>Hủy</button>
                </form>
            </Wrapper>
        </div>
    );

    const renderAddThem = () => (
        <div className={cx('formadd')}>
            <Wrapper>
                <form action="">
                    <input type="text" placeholder="Loại doanh thu" />
                    <input type="number" placeholder="Số tiền" />
                    <button>Thêm</button>
                    <button onClick={() => setIsAddThem(!isAddThem)}>Hủy</button>
                </form>
            </Wrapper>
        </div>
    );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <h2>Doanh thu hàng tháng</h2>
                    <button onClick={() => setIsAddDT(!isaddDT)}>
                        <FontAwesomeIcon icon={faCirclePlus} />
                        <span>Thêm</span>
                    </button>
                </div>
                {isaddDT && renderAddHangThang()}
                <Wrapper>
                    {revenueMonth.length === 0 ? <p>Chưa tạo doanh thu tháng này</p> : <Table data={revenueMonth} />}
                </Wrapper>
            </div>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <h2>Doanh thu thêm</h2>
                    <button onClick={() => setIsAddThem(!isAddThem)}>
                        <FontAwesomeIcon icon={faCirclePlus} />
                        <span>Thêm</span>
                    </button>
                </div>
                {isAddThem && renderAddThem()}
                <Wrapper>
                    <Table data={datasFake} />
                </Wrapper>
            </div>
        </div>
    );
};

export default Revenue;
