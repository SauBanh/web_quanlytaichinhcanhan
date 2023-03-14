import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import styles from './Revenue.module.scss';
import classNames from 'classnames/bind';

import Wrapper from '../../components/Wrapper/Wrapper';
import Table from '../../components/Table/Table';

const cx = classNames.bind(styles);

const Revenue = () => {
    const [isaddDT, setIsAddDT] = useState(false);
    const [isAddThem, setIsAddThem] = useState(false);

    const datasFake = [
        {
            id: 1,
            title: 'Lương tháng 1',
            date: '30-01-2023',
            moeny: 3000000,
        },
        {
            id: 2,
            title: 'Lương tháng 2',
            date: '30-02-2023',
            moeny: 7000000,
        },
        {
            id: 3,
            title: 'Lương tháng 3',
            date: '30-03-2023',
            moeny: 5000000,
        },
        {
            id: 4,
            title: 'Lương tháng 4',
            date: '30-04-2023',
            moeny: 3000000,
        },
        {
            id: 5,
            title: 'Lương tháng 5',
            date: '30-05-2023',
            moeny: 3000000,
        },
        {
            id: 6,
            title: 'Lương tháng 6',
            date: '30-06-2023',
            moeny: 8000000,
        },
        {
            id: 7,
            title: 'Lương tháng 7',
            date: '30-07-2023',
            moeny: 9000000,
        },
    ];

    const renderAddHangThang = () => (
        <div className={cx('formadd')}>
            <Wrapper>
                <form action="">
                    <input type="text" placeholder="Loại doanh thu" />
                    <input type="number" placeholder="Số tiền" />
                    <button>Thêm</button>
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
                    <Table data={datasFake} />
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
