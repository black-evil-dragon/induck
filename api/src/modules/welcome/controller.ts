import { Request, Response } from 'express';

import { BaseController } from '@modules/base/controller';

import { WelcomeService } from './service';


export class WelcomeController extends BaseController<WelcomeService> {
    handleWelcome = (_req: Request, res: Response) => {
        try {
            const response = this.service.getWelcomeMessage();
            this.sendResponse(res, response);
        } catch (error) {
            this.handleError(res, error as Error);
        }
    };
}