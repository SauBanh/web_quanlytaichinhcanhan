import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

function Dropdown() {
    return (
        <div className={cx('wrapper')}>
            <ul>
                <li>
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUser} />
                        <span>Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Dropdown;
