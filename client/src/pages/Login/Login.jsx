import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Login.module.scss';
import classNames from 'classnames/bind';

import { API_ENDPOINTS } from '../../assets/Api/Api';

import Cookies from 'js-cookie';
import axios from 'axios';
import classes from './Login.module.scss';

const cx = classNames.bind(styles);
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState();

    const handleLogin = (event) => {
        event.preventDefault();

        // axios
        //     .post(`${API_URL}/api/auth/authenticate`, { username, password })
        //     .then((response) => {
        //         setToken(response.data.token);
        //         console.log(response.data);
        //     })
        //     .catch((error) => console.error(error));
        return axios.get(API_ENDPOINTS.USERS, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    };

    const handleGetData = () => {
        axios
            .get('http://localhost:8081/api/users/', {
                headers: {
                    // Content-Type: 'application/json',
                    accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        console.log(token);
    };

    const handlePost = () => {
        axios
            .post(
                'http://localhost:8081/api/revenue/',
                {
                    idr: 0,
                    id: 2,
                    name: 'test2',
                    value: 1000,
                    adddate: '2023-03-18T03:31:03.314Z',
                    description: 'string',
                },

                {
                    headers: {
                        // Content-Type: 'application/json',
                        accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                },
            )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => console.error(error));

        console.log(token);
    };
    const handleGetRevenue = () => {
        axios
            .get('http://localhost:8081/api/revenue/', {
                headers: {
                    // Content-Type: 'application/json',
                    accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDeleteRevenue = () => {
        axios
            .delete('http://localhost:8081/api/revenue/8?uid=2', {
                headers: {
                    // Content-Type: 'application/json',
                    accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handlePutRevenue = () => {
        axios
            .put(
                'http://localhost:8081/api/revenue/10?uid=2',
                {
                    name: '123',
                    value: 1000,
                    adddate: '2023-03-18T03:31:03.314Z',
                    description: 'string',
                },
                {
                    headers: {
                        // Content-Type: 'application/json',
                        accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                },
            )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
};

export default Login;
