import React, { useEffect, useState } from 'react';
import styles from './NotFound.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const NotFound = () => {
    return (
      <div className={cx('not-found')}>
        <h1>Page Not Found</h1>
        <p>Sorry, we couldn't find the page you were looking for.</p>
        <Link to="/" className={cx('btn')}>  Quay về trang chủ</Link>    
      </div>
    );
};

export default NotFound;