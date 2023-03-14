import React from 'react';
import { NavLink } from 'react-router-dom';

// thêm icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoneyBill, faMoneyCheckDollar, faSackDollar } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Avatar from '../Avatar/Avatar';

const cx = classNames.bind(styles);

const itemsMenuSidebar = [
    {
        link: '/',
        title: 'Home',
        icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
        link: '/revenue',
        title: 'Quản lý doanh thu',
        icon: <FontAwesomeIcon icon={faMoneyBill} />,
    },
    {
        link: '/spending',
        title: 'Quản lý chi tiêu',
        icon: <FontAwesomeIcon icon={faMoneyCheckDollar} />,
    },
    {
        link: '/accumulate',
        title: 'Tích lũy',
        icon: <FontAwesomeIcon icon={faSackDollar} />,
    },
];

const Sidebar = () => {
    return (
        <div className={cx('wrapper')}>
            <aside>
                <Avatar />
                <ul>
                    {itemsMenuSidebar.map((itemMenuSidebar, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    className={(nav) => cx('menuitem', { active: nav.isActive })}
                                    to={itemMenuSidebar.link}
                                >
                                    <div className={cx('logo')}>{itemMenuSidebar.icon}</div>
                                    {itemMenuSidebar.title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
