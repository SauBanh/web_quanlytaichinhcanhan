import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Cookies from 'js-cookie';
import axios from 'axios';

import api from '../../assets/Api/Api';
import classes from './Login.module.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState();

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
        <>
            {token ? (
                <div>
                    <p>You are logged in with token: {token}</p>
                    <button onClick={handleGetData}>test name</button>
                    <button onClick={handlePost}>post revenue</button>
                    <button onClick={handleGetRevenue}>get revenue</button>
                    <button onClick={handleDeleteRevenue}>delete revenue</button>
                    <button onClick={handlePutRevenue}>put revenue</button>
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
