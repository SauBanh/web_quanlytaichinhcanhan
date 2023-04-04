import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Cookies from 'js-cookie';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';

import * as tokenServices from '../../utils/apiServices/tokenServices';

import * as userServices from '../../utils/apiServices/userServices';

const cx = classNames.bind(styles);
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isTrue, setIsTrue] = useState(false);
    const token = Cookies.get('token');
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const getToken = async () => {
            const result = await tokenServices.token(data);
            if (result.status === 200) {
                Cookies.set('token', result.data.token, {
                    expires: new Date(Date.now() + 20 * 60 * 1000),
                    path: '/',
                    secure: true,
                });
            } else if (result === 1) {
                setIsTrue(true);
            }
        };
        await getToken();
        const getUser = async () => {
            const result = await userServices.currentUser(Cookies.get('token'));
            if (result.status === 200) {
                await localStorage.setItem('user', JSON.stringify(result.data));
                navigate('/');
                console.log('Đăng nhập thành công');
            }
        };
        await getUser();
    };

    if (token) {
        return <Navigate to="/" />;
    } else {
        return (
            <div className={cx('modal')}>
                <div className={cx('modal_overlay')}></div>
                <div className={cx('modal_body')}>
                    <div className={cx('modal_inner')}>
                        <form onSubmit={handleSubmit(onSubmit)} id="my-form">
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
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Nhập Email"
                                            type="text"
                                            className={cx('auth-form_input')}
                                            defaultValue={username}
                                            {...register('username', { required: true })}
                                        />
                                    </div>
                                    {errors.username && <p className={cx('require_error')}>Chưa nhập user name</p>}
                                    <div className={cx('auth-form_group')}>
                                        <input
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            defaultValue={password}
                                            placeholder="Nhập Mật Khẩu"
                                            className={cx('auth-form_input')}
                                            {...register('password', { required: true })}
                                        />
                                        {errors.password && (
                                            <p className={cx('require_error')}>This field is required</p>
                                        )}
                                        {isTrue && (
                                            <p className={cx('require_error')}>Sai tên đăng nhập hoặc đăng ký</p>
                                        )}
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
