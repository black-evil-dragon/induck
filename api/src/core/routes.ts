import { Router } from "express";

import { CONFIG } from "@core/config";
import { welcomeRouter } from "@modules/welcome/routes";



export const registerRoutes = (app: Router) => {
    console.log(111, welcomeRouter.getRouter());
    app.use(`${CONFIG.API_PREFIX}/welcome`, welcomeRouter.getRouter());
}