import { BaseRouter } from "@modules/base/routes";

import { TaskController } from "./controller";
import { TaskService } from "./service";


class TaskRouter extends BaseRouter {
    constructor(private readonly controller: TaskController) {
        super();
        this.registerRoutes();
    }

    protected registerRoutes() {
        this.registerRoute('get', '/', this.controller.handleTask);

        this.registerRoute('post', '/generate-random/', this.controller.generateTask);
    }
}

const service = new TaskService();
const controller = new TaskController(service);

export const taskRouter = new TaskRouter(controller);