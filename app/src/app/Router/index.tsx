import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from '@app/Layout';

import { NoPage } from '@pages/404';
import { HomePage } from '@pages/home';
import { AuthPage, AuthRouter } from '@pages/auth';
import { CatalogPage, CatalogRouter } from '@pages/catalog';
// import { SelectionPage, SelectionRouter } from '@pages/selection';
// import { RedirectComponent } from '@shared/Redirect';



function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Home page */}
                    <Route index element={<HomePage />} />

                    {/* Pages */}
                    <Route path={AuthRouter.root} element={<AuthPage />} />


                    {/* Catalog with nested routes */}
                    <Route path={CatalogRouter.root}>
                        {/* /catalog — список категорий */}
                        <Route index element={<CatalogPage />} />

                        <Route path={CatalogRouter.category} element={<CatalogPage />} />
                    </Route>

                    {/* Question */}
                    {/* <Route path={SelectionRouter.selection}>
                        <Route index element={<RedirectComponent path='/' />}/>

                        <Route path={SelectionRouter.selection} element={<SelectionPage />} />
                    </Route> */}

                    {/*     ... */}

                    {/* System pages */}
                    <Route path="*" element={<NoPage />} />
                    <Route path="/404" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default Routing;
