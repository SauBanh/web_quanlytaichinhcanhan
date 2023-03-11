import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Register.module.scss';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gọi API đăng ký tại đây
    };

    return (
        <div>
        <h2>Đăng ký</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
            <label htmlFor="password">Mật khẩu:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
            <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button type="submit">Đăng ký</button>
        </form>
        <p>Nếu đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
    </div>
    );
};

export default Register;
