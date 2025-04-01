import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from '@app/Layout';

import { NoPage } from '@pages/404';
import { HomePage } from '@pages/home';
import { AuthPage, AuthRouter } from '@pages/auth';
import { SelectionPage, SelectionRouter } from '@pages/selection';



function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Home page */}
                    <Route index element={<HomePage />} />

                    {/* Pages */}
                    <Route path={AuthRouter.root} element={<AuthPage />} />


                    <Route path={SelectionRouter.root} element={<SelectionPage />} />

                    {/*     ... */}

                    {/* System pages */}
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default Routing;
