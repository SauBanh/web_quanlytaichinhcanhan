import React from 'react';

import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';
import avatar from '../../../../assets/images/avata.jpg';

const cx = classNames.bind(styles);

function Avatar() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={avatar} alt="avatar cá nhân" />
            <span>Nguyễn Tuấn Anh</span>
        </div>
    );
}

export default Avatar;
