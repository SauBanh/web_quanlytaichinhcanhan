import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <div className={cx('wrapper')}>
            <aside>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/revenue">Quản lý doanh thu</Link>
                    </li>
                    <li>
                        <Link to="/spending">Quản lý chi tiêu</Link>
                    </li>
                    <li>
                        <Link to="/Accumulate">Tích lũy</Link>
                    </li>
                </ul>
            </aside>
            <Outlet />
        </div>
    );
};

export default Sidebar;
