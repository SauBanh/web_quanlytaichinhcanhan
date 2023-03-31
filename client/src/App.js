// các thư viện reactjs
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Fragment } from 'react';

import NotFound from './pages/NotFound/NotFound';

import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layouts';

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
                <Route path="/404" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
