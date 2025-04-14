import { Router, RequestHandler } from 'express';

export abstract class BaseRouter {
    protected router: Router;

    constructor() {
        this.router = Router();
    }

    protected abstract registerRoutes(): void;

    protected registerRoute(
        method: 'get' | 'post' | 'put' | 'delete',
        path: string,
        handler: RequestHandler
    ): void {
        this.router[method](path, handler);
    }

    public getRouter(): Router {
        return this.router;
    }
}