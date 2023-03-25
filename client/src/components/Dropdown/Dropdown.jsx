import React from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

function Dropdown() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        Cookies.remove('token');
        navigate('/login');
    };

    return (
        <div className={cx('wrapper')}>
            <ul>
                <li>
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUser} />
                        <span>Profile</span>
                    </Link>
                </li>
                <li onClick={handleLogout}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    );
}

export default Dropdown;
