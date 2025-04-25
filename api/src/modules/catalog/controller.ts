import { Request, Response } from 'express';

import { BaseController } from '@modules/base/controller';
import { CatalogService } from './service';
// import { Category } from './model';


export class CatalogController extends BaseController<CatalogService> {
    handleCatalog = (request: Request, response: Response) => {
        try {
            const { slug } = request.query

            if (!slug) {
                this.sendResponse(response, this.service.getCatalog({
                    filterActive: true,
                }));
                return


            } else {
                this.sendResponse(response, this.service.getCategory({
                    slug: slug as string
                }));
                return
            }
            
           
        } catch (error) {
            this.handleError(response, error as Error);
            return
        }
    };
}