import { Request, Response } from 'express';

import { BaseController } from '@modules/base/controller';
import { CatalogService } from './service';
// import { Category } from './model';


export class CatalogController extends BaseController<CatalogService> {
    getCatalog = (_request: Request, response: Response) => {
        try {
            this.sendResponse(response, this.service.getCatalog({
                filterActive: true,
            }));
            return
            
           
        } catch (error) {
            this.handleError(response, error as Error);
            return
        }
    };

    getCategory = (request: Request, response: Response) => {
        try {
            const { slug, id } = request.query

            this.sendResponse(response, this.service.getCategory({
                slug: slug as string,
                id: id as string
            }));
            return


        } catch (error) {
            this.handleError(response, error as Error);
            return
        }
    };
}