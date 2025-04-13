import { Application } from "express";

import homeRoutes from "../services/home/route";
// import tutorialRoutes from "./tutorial.routes";

export default class Routes {
    constructor(app: Application) {
        app.use("/api", homeRoutes);
        // app.use("/api/tutorials", tutorialRoutes);
    }
}