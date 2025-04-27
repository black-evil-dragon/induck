import { BaseRouter } from "@modules/base/routes";

import { CatalogController } from "./controller";
import { CatalogService } from "./service";


class CatalogRouter extends BaseRouter {
    constructor(private readonly controller: CatalogController) {
        super();
        this.registerRoutes();
    }

    protected registerRoutes() {
        this.registerRoute('get', '/', this.controller.getCatalog);
        this.registerRoute('get', '/category/', this.controller.getCategory);
    }
}

const service = new CatalogService();
const controller = new CatalogController(service);

export const catalogRouter = new CatalogRouter(controller);