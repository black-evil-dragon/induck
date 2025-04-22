import { BaseService } from '@modules/base/service';


import { categories, Category } from './model';


export class CatalogService extends BaseService {
    getCatalog(
        options: {
            filterActive?: boolean;
            callback?: (data: Category[]) => Category[] | void;
        } = {}
    ) {
        let data = categories;

        if (options.filterActive) {
            data = data.filter(category => category.isActive === true);
        }

        if (options.callback) {
            const result = options.callback(data);
            
            if (result) data = result;
        }

        return this.createSuccessResponse(data);
    }
}