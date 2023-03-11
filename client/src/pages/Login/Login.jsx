import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Cookies from 'js-cookie';
import axios from 'axios';

import classes from './Login.module.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gọi API đăng nhập tại đây
    };

    return (
        <div>
            <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Đăng nhập</button>
            </form>
            <p>
                Nếu chưa có tài khoản? <Link to="/register">Đăng ký</Link>
            </p>
        </div>
    );
};

export default Login;
