import { Router } from "express";

import { CONFIG } from "@core/config";


import { welcomeRouter } from "@modules/welcome/routes";
import { catalogRouter } from "@modules/catalog/routes";



export const registerRoutes = (app: Router) => {
    // Welcome
    app.use(`${CONFIG.API_PREFIX}/`, welcomeRouter.getRouter());

    // Catalog
    app.use(`${CONFIG.API_PREFIX}/`, catalogRouter.getRouter());
}