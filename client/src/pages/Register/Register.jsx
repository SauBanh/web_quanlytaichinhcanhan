import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import classes from './Register.module.scss';

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    // const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8081/api/auth/register', {
                username: userName,
                name: name,
                password: password,
                email: email,
            })
            .then((response) => console.log(response.data))
            .catch((error) => console.error(error));
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
                    <label htmlFor="email">Name:</label>
                    <input type="text" id="email" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">UserName:</label>
                    <input type="text" id="email" value={userName} onChange={(e) => setUserName(e.target.value)} />
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
                {/* <div>
                    <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div> */}
                <button type="submit">Đăng ký</button>
            </form>
            <p>
                Nếu đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </p>
        </div>
    );
};

export default Register;
