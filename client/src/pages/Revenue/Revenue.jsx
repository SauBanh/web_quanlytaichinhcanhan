import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import styles from './Revenue.module.scss';
import classNames from 'classnames/bind';

import Wrapper from '../../components/Wrapper/Wrapper';
import Table from '../../components/Table/Table';

import Button from '../../components/Button/Button';

const cx = classNames.bind(styles);

const Revenue = () => {
    const datasFake = [
        {
            title: 'Lương tháng 1',
            date: '30-01-2023',
            moeny: 3000000,
        },
        {
            title: 'Lương tháng 2',
            date: '30-02-2023',
            moeny: 7000000,
        },
        {
            title: 'Lương tháng 3',
            date: '30-03-2023',
            moeny: 5000000,
        },
        {
            title: 'Lương tháng 4',
            date: '30-04-2023',
            moeny: 3000000,
        },
        {
            title: 'Lương tháng 5',
            date: '30-05-2023',
            moeny: 3000000,
        },
        {
            title: 'Lương tháng 6',
            date: '30-06-2023',
            moeny: 8000000,
        },
        {
            title: 'Lương tháng 7',
            date: '30-07-2023',
            moeny: 9000000,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <h2>Doanh thu hàng tháng</h2>
                    <button>
                        <FontAwesomeIcon icon={faCirclePlus} />
                        <span>Thêm</span>
                    </button>
                </div>
                <Wrapper>
                    <Table data={datasFake} />
                </Wrapper>
            </div>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <h2>Doanh thu thêm</h2>
                    <button>
                        <FontAwesomeIcon icon={faCirclePlus} />
                        <span>Thêm</span>
                    </button>
                </div>
                <Wrapper>
                    <Table data={datasFake} />
                </Wrapper>
            </div>
        </div>
    );
};

export default Revenue;
