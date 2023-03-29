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
    const [isTrue, setIsTrue] = useState(true);
    const token = Cookies.get('token');
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // const onSubmit = (data) => {
    //     console.log(data);

    // };

    const handleLogin = async (event) => {
        event.preventDefault();
        // if (!username) {
        //     alert('Vui lòng nhập user');
        //     return;
        // } else if (!password) {
        //     alert('Vui lòng nhập mật khẩu');
        //     return;
        // } else if (password.length < 8) {
        //     alert('Mật khẩu tối thiểu 8 kí tự');
        // }
        const getToken = async () => {
            const result = await tokenServices.token({ username, password });
            if (result.status === 200) {
                Cookies.set('token', result.data.token, {
                    expires: new Date(Date.now() + 20 * 60 * 1000),
                    path: '/',
                    secure: true,
                });
            } else if (result.status === 403) {
                setIsTrue(false);
                console.log('Sai tài khoản hoặc mật khẩu');
            }
        };
        await getToken();
        const getUser = async () => {
            const result = await userServices.currentUser(Cookies.get('token'));
            await localStorage.setItem('user', JSON.stringify(result));
        };
        await getUser();
        console.log('Đăng nhập thành công');
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
                                        {/* <input
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Nhập Email"
                                            type="text"
                                            className={cx('auth-form_input')}
                                            defaultValue={username}
                                            {...register('username', { required: true })}
                                        /> */}
                                    </div>
                                    {errors.username && <p className={cx('require_error')}>Chưa nhập user name</p>}
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
                                        {/* <input
                                            type="text"
                                            onChange={(e) => setPassword(e.target.value)}
                                            defaultValue={password}
                                            placeholder="Nhập Mật Khẩu"
                                            className={cx('auth-form_input')}
                                            {...register('password', { required: true })}
                                        /> */}
                                        {/* errors will return when field validation fails  */}
                                        {errors.password && (
                                            <p className={cx('require_error')}>This field is required</p>
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
            // <form onSubmit={handleSubmit(onSubmit)}>
            //     {/* register your input into the hook by invoking the "register" function */}
            //     <input defaultValue="test" {...register('example')} />

            //     {/* include validation with required or other standard HTML validation rules */}
            //     <input {...register('exampleRequired', { required: true })} />
            //     {/* errors will return when field validation fails  */}
            //     {errors.exampleRequired && <span>This field is required</span>}

            //     <input type="submit" />
            // </form>
        );
    }
};

export default Login;
