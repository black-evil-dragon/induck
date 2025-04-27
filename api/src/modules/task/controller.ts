import { Request, Response } from 'express';


import { BaseController } from '@modules/base/controller';
import { TaskService } from './service';


export class TaskController extends BaseController<TaskService> {
    handleTask = (_request: Request, response: Response) => {
        try {

            // this.sendResponse(response)
            
           
        } catch (error) {
            this.handleError(response, error as Error);
            return
        }
    };

    generateTask = (request: Request, response: Response) => {
        try {
            console.log(request.body);


            this.sendResponse(response, this.service.generateTask());

        } catch (error) {
            this.handleError(response, error as Error);
            return
        }
    };
}