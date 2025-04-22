import { Request, Response } from 'express';

import { BaseController } from '@modules/base/controller';
import { CatalogService } from './service';


export class CatalogController extends BaseController<CatalogService> {
    handleCatalog = (_request: Request, response: Response) => {
        try {
            const data = this.service.getCatalog({
                filterActive: true
            });
            
            // this.handleError(response, {} as Error);
            this.sendResponse(response, data);
        } catch (error) {
            this.handleError(response, error as Error);
        }
    };
}