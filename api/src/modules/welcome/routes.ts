import { BaseRouter } from "@modules/base/routes";

import { WelcomeController } from "./controller";
import { WelcomeService } from "./service";


class WelcomeRouter extends BaseRouter {
    constructor(private readonly controller: WelcomeController) {
        super();
        this.registerRoutes();
    }

    protected registerRoutes(): void {
        this.registerRoute('get', '/', this.controller.handleWelcome);
    }
}

const service = new WelcomeService();
const controller = new WelcomeController(service);

export const welcomeRouter = new WelcomeRouter(controller);