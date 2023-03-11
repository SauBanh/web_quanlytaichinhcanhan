import React from 'react';

// thêm icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className="logo">
                    <FontAwesomeIcon icon={faHouse} />
                </div>

                <div className={cx('acion')}>action</div>
            </div>
        </header>
    );
}

export default Header;
