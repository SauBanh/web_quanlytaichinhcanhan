import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import styles from './ForgotPassword.module.scss';
import classNames from 'classnames/bind';

import Cookies from 'js-cookie';
import axios from 'axios';

const cx = classNames.bind(styles);
const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            alert('Vui lòng nhập email');
            return;
          } 
        // Gọi API đăng nhập tại đây
    };
    return (
        <div className={cx('modal')}>
            <div className={cx('modal_overlay')}></div>
            <div className={cx('modal_body')}>
                <div className={cx('modal_inner')}>
                    <form onSubmit={handleSubmit} id="my-form">
                        <div className={cx('auth-form')}>
                                <div className={cx('auth-form_header')}>
                                    <h3 className={cx('auth-form_heading')}>Đặt Lại Mật Khẩu</h3>                                  
                                </div>
                                <div className={cx('auth-form_form')}>
                                    <div className={cx('auth-form_group')}>
                                        <p>Quên mật khẩu? Hãy điền địa chỉ email của bạn. Bạn sẽ nhận được một liên kết để tạo một mật khẩu mới qua email.</p>
                                        <input type="email" className={cx('auth-form_input')} value={email}  id="email" placeholder="Nhập Email"onChange={(e) => setEmail(e.target.value)} />                                    
                                    </div>
                                </div>
                                <div className={cx('auth-form_btn')}>
                                    <button type="submit" id="submit" className={cx('btn')}>XÁC NHẬN</button>
                                </div>                                
                        </div>  
                        <Link to="/login" className={cx('return-btn')}>Quay Lại Đăng Nhập!</Link>
                    </form>                    
                </div>
            </div>
        </div>     
    );
};

export default ForgotPassword;