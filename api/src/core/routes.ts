import { Router } from "express";

import { CONFIG } from "@core/config";


import { welcomeRouter } from "@modules/welcome/routes";
import { catalogRouter } from "@modules/catalog/routes";
import { taskRouter } from "@modules/task/routes";



export const registerRoutes = (app: Router) => {
    // Welcome
    app.use(`${CONFIG.API_PREFIX}/`, welcomeRouter.getRouter());

    // Catalog
    app.use(`${CONFIG.API_PREFIX}/catalog/`, catalogRouter.getRouter());

    // Task
    app.use(`${CONFIG.API_PREFIX}/task/`, taskRouter.getRouter());
}