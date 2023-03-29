import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const token = Cookies.get('token');

    // useEffect(async () => {

    // }, []);

    if (!token) {
        return <Navigate to="/login" />;
    } else {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>
                        <Header />
                        <div className={cx('content-childern')}>{children}</div>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default DefaultLayout;
