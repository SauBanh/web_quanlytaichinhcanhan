import React from 'react';

import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';
import avatar from '../../../../assets/images/avata.jpg';

const cx = classNames.bind(styles);

function Avatar() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={avatar} alt="avatar cá nhân" />
            <span>{user.name}</span>
        </div>
    );
}

export default Avatar;
