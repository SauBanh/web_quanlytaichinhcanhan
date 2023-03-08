import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes, privateRoutes } from './routes';
import { DefaultLayout } from './components/Layouts';

import classes from './App.module.scss';

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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
