import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import * as registerServices from '../../utils/apiServices/registerServices';

import styles from './Register.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Register = () => {
    const [username, setusername] = useState('');
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const token = Cookies.get('token');
    const navigate = useNavigate();
    // const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // axios
        //     .post('http://localhost:8081/api/auth/register', {
        //         username: username,
        //         name: name,
        //         password: password,
        //         email: email,
        //     })
        //     .then((response) => console.log(response.data))
        //     .catch((error) => console.error(error));
        // Gọi API đăng ký tại đây
        const getToken = async () => {
            const result = await registerServices.register({ username, name, password, email });
            console.log(result);
        };
        await getToken();
        navigate('/login');
    };

    if (token) {
        return <Navigate to="/" />;
    } else {
        return (
            <div className={cx('modal')}>
                <div className={cx('modal_overlay')}></div>
                <div className={cx('modal_body')}>
                    <div className={cx('modal_inner')}>
                        <form onSubmit={handleSubmit} id="my-form">
                            <div className={cx('auth-form')}>
                                <div className={cx('auth-form_header')}>
                                    <h3 className={cx('auth-form_heading')}>Đăng Ký</h3>
                                    <Link to="/login" className={cx('auth-form_switch-btn')}>
                                        {' '}
                                        Đăng Nhập!
                                    </Link>
                                </div>
                                <div className={cx('auth-form_form')}>
                                    <div className={cx('auth-form_group')}>
                                        <table className={cx('auth-form_username')}>
                                            <tbody>
                                                <tr>
                                                    <th>
                                                        <input
                                                            type="text"
                                                            className={cx('auth-form_input')}
                                                            value={username}
                                                            id="username"
                                                            placeholder="Nhập User Name"
                                                            onChange={(e) => setusername(e.target.value)}
                                                            required
                                                        />
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <input
                                                            type="text"
                                                            className={cx('auth-form_input')}
                                                            value={name}
                                                            id="name"
                                                            placeholder="Nhập Name"
                                                            onChange={(e) => setname(e.target.value)}
                                                            required
                                                        />
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={cx('auth-form_group')}>
                                        <input
                                            type="email"
                                            className={cx('auth-form_input')}
                                            value={email}
                                            id="email"
                                            placeholder="Nhập Email"
                                            onChange={(e) => setEmail(e.target.value)}
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
                                    {/* <div className={cx('auth-form_group')}>
                                        <input
                                            type="password"
                                            className={cx('auth-form_input')}
                                            value={confirmPassword}
                                            id="confirmPassword"
                                            placeholder="Nhập Mật Khẩu"
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div> */}
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
                                        ĐĂNG KÝ
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

export default Register;
