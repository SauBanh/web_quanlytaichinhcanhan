import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Cookies from 'js-cookie';
import axios from 'axios';

import classes from './Login.module.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:8081/api/auth/authenticate', { username, password })
            .then((response) => {
                setToken(response.data.token);
                console.log(response.data);
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            {token ? (
                <div>
                    <p>You are logged in with token: {token}</p>
                    <button onClick={() => setToken('')}>Logout</button>
                </div>
            ) : (
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}
        </>
    );
};

export default Login;
