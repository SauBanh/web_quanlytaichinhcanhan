import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';

import * as tokenServices from '../../utils/apiServices/tokenServices';

import * as userServices from '../../utils/apiServices/userServices';

const cx = classNames.bind(styles);
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isTrue, setIsTrue] = useState(true);
    const token = Cookies.get('token');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const getToken = async () => {
            const result = await tokenServices.token({ username, password });
            // console.log(Cookies.get('token'));
            // console.log(result);
            if (result.status === 200) {
                Cookies.set('token', result.data.token, {
                    expires: new Date(Date.now() + 20 * 60 * 1000),
                    path: '/',
                    secure: true,
                });
            } else if (result.status === 403) {
                setIsTrue(false);
                console.log('error');
            }
        };
        await getToken();
        const getUser = async () => {
            const result = await userServices.currentUser(Cookies.get('token'));
            await localStorage.setItem('user', JSON.stringify(result));
        };
        await getUser();
        navigate('/');
    };

    if (token) {
        return <Navigate to="/" />;
    } else {
        return (
            <div className={cx('modal')}>
                <div className={cx('modal_overlay')}></div>
                <div className={cx('modal_body')}>
                    <div className={cx('modal_inner')}>
                        <form onSubmit={handleLogin} id="my-form">
                            <div className={cx('auth-form')}>
                                <div className={cx('auth-form_header')}>
                                    <h3 className={cx('auth-form_heading')}>Đăng Nhập</h3>
                                    <Link to="/register" className={cx('auth-form_switch-btn')}>
                                        {' '}
                                        Đăng Ký!
                                    </Link>
                                </div>
                                <div className={cx('auth-form_form')}>
                                    <div className={cx('auth-form_group')}>
                                        <input
                                            type="text"
                                            className={cx('auth-form_input')}
                                            value={username}
                                            id="email"
                                            placeholder="Nhập Email"
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className={cx('auth-form_group')}>
                                        <input
                                            type="password"
                                            className={cx('auth-form_input')}
                                            value={password}
                                            id="password"
                                            placeholder="Nhập Mật Khẩu"
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={cx('auth-form_aside')}>
                                    <p className={cx('auth-form_text')}>
                                        <Link to="/ForgotPassword" className={cx('auth-form_link')}>
                                            Quên mật khẩu?
                                        </Link>
                                    </p>
                                </div>
                                <div className={cx('auth-form_btn')}>
                                    <button type="submit" id="submit" className={cx('btn')}>
                                        ĐĂNG NHẬP
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default Login;
