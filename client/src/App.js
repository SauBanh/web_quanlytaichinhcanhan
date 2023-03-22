// các thư viện reactjs
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Fragment } from 'react';
// sử dụng để hỗ trợ lưu cookie trong reactjs
import Cookies from 'js-cookie';
// thư viện axios cho phép tương tác với cái link khác
import axios from 'axios';

import { publicRoutes, privateRoutes } from './routes';
import { DefaultLayout } from './components/Layouts';

import classes from './App.module.scss';
import Profile from './pages/Profile/Profile';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = route.layout === null ? Fragment : DefaultLayout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="/404" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

// import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function App() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [loggedIn, setLoggedIn] = useState(false);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('/api/login', { username, password });
//             const token = response.data.token;
//             Cookies.set('token', token);
//             setLoggedIn(true);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleLogout = () => {
//         Cookies.remove('token');
//         setLoggedIn(false);
//     };

//     return (
//         <div>
//             {loggedIn ? (
//                 <div>
//                     <p>Xin chào {username}!</p>
//                     <button onClick={handleLogout}>Đăng xuất</button>
//                 </div>
//             ) : (
//                 <form onSubmit={handleLogin}>
//                     <label>
//                         Tên đăng nhập:
//                         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                     </label>
//                     <br />
//                     <label>
//                         Mật khẩu:
//                         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                     </label>
//                     <br />
//                     <button type="submit">Đăng nhập</button>
//                 </form>
//             )}
//         </div>
//     );
// }

// export default App;
