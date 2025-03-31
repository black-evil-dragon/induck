import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from '@app/Layout';

import { NoPage } from '@pages/404';
import { HomePage } from '@pages/home';
import { AuthPage } from '@pages/auth';



function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Home page */}
                    <Route index element={<HomePage />} />

                    {/* Pages */}
                    <Route path="/auth/" element={<AuthPage />} />

                    {/*     ... */}

                    {/* System pages */}
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default Routing;
