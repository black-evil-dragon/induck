import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from '@app/Layout';

import { NoPage } from '@pages/404';
import { HomePage } from '@pages/home';
import { AuthPage, AuthRouter } from '@pages/auth';
import { CatalogPage, CatalogRouter } from '@pages/catalog';
import { RandomTaskPage, TaskPage, TaskRouter } from '@pages/task';

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

                    {/* Task */}
                    <Route path={TaskRouter.root}>
                        {/* /catalog — список категорий */}
                        <Route index element={<TaskPage />} />

                        <Route path={`${TaskRouter.getTaskByID}/${TaskRouter.taskId}`} element={<TaskPage />} />
                        <Route path={`${TaskRouter.getRandomTask}/${TaskRouter.categoryId}`} element={<RandomTaskPage />} />
                    </Route>

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
