import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Cookies from 'js-cookie';

import * as registerServices from '../../utils/apiServices/registerServices';

import styles from './Register.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Register = () => {
    const [showPass, setShowPass] = useState(false);
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
            const result = await registerServices.register(data);
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
                        <form onSubmit={handleSubmit(onSubmit)} id="my-form">
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
                                                            placeholder="Nhập username"
                                                            type="text"
                                                            className={cx('auth-form_input')}
                                                            {...register('username', {
                                                                required: true,
                                                                pattern: /^[^\s]+$/,
                                                            })}
                                                        />
                                                        {errors.username?.type === 'required' && (
                                                            <p
                                                                style={{
                                                                    color: 'red',
                                                                    fontSize: '13px',
                                                                    fontWeight: '400',
                                                                }}
                                                            >
                                                                Chưa nhập user name
                                                            </p>
                                                        )}
                                                        {errors.username?.type === 'pattern' && (
                                                            <p
                                                                style={{
                                                                    color: 'red',
                                                                    fontSize: '13px',
                                                                    fontWeight: '400',
                                                                }}
                                                            >
                                                                Username không được có gõ dấu cách
                                                            </p>
                                                        )}
                                                    </th>
                                                    <th></th>
                                                    <th>
                                                        <input
                                                            type="text"
                                                            className={cx('auth-form_input')}
                                                            placeholder="Nhập Name"
                                                            {...register('name', { required: true })}
                                                        />
                                                        {errors.name && (
                                                            <p
                                                                style={{
                                                                    color: 'red',
                                                                    fontSize: '13px',
                                                                    fontWeight: '400',
                                                                }}
                                                            >
                                                                Chưa nhập name
                                                            </p>
                                                        )}
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={cx('auth-form_group')}>
                                        <input
                                            type="email"
                                            className={cx('auth-form_input')}
                                            placeholder="Nhập Email"
                                            {...register('email', { required: true })}
                                        />
                                        {errors.email && (
                                            <p style={{ color: 'red', fontSize: '13px' }}>Chưa nhập name</p>
                                        )}
                                    </div>
                                    <div style={{ position: 'relative' }} className={cx('auth-form_group')}>
                                        <input
                                            type={showPass ? 'text' : 'password'}
                                            placeholder="Nhập Mật Khẩu"
                                            className={cx('auth-form_input')}
                                            {...register('password', { required: true })}
                                        />
                                        {errors.password && (
                                            <p
                                                style={{
                                                    color: 'red',
                                                    fontSize: '13px',
                                                    fontWeight: '400',
                                                }}
                                            >
                                                This field is required
                                            </p>
                                        )}
                                        <div
                                            onClick={() => setShowPass(!showPass)}
                                            style={{
                                                position: 'absolute',
                                                top: '23px',
                                                right: '10px',
                                            }}
                                        >
                                            {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </div>
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
