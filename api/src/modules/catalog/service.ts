import { BaseService } from '@modules/base/service';


import { categories, Category } from './model/category';


export class CatalogService extends BaseService {
    getCatalog(
        options: {
            filterActive?: boolean;
            slug?: string;
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

    getCategory(
        options: {
            slug?: string,
            id?: string
        } = {}
    ) {
        let data = {}
        let selectCategories: Category[] = categories
        let selectCategory: Category | null


        if (options.slug) {
            selectCategories = selectCategories.filter(category => (category.slug == options.slug))
        }
        if (options.id) {
            selectCategories = selectCategories.filter(category => (category.id == options.id))
        }

        //? Вообще по-хорошему, надо ругаться на то, что может вернуться две категории с одинаковым слагом, но к сожалению, нет времени думать об этом
        selectCategory = selectCategories ? selectCategories[0] : null

        // Берем дочерние категории
        if (!selectCategory) return this.createSuccessResponse(data);

        selectCategories = categories.filter(category => category.parent?.id == selectCategory.id)

        data = {
            ...selectCategory,
            children: selectCategories,
        }

        return this.createSuccessResponse(data);
    }
}