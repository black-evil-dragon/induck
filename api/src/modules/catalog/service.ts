import { BaseService } from '@modules/base/service';


import { categories, Category } from './model/category';


export class CatalogService extends BaseService {

    createCategoryTree(data: Category[]) {
        const categoryMap: { [id: string]: Category & { children?: Category[] } } = {};
        data.forEach(category => {
            categoryMap[category.id] = { ...category };
        });


        const rootCategories: Category[] = [];
        data.forEach(category => {
            if (category.parent) {
                if (categoryMap[category.parent.id]) {
                    if (!categoryMap[category.parent.id].children) {
                        categoryMap[category.parent.id].children = [];
                    }
                    categoryMap[category.parent.id].children!.push(categoryMap[category.id]);
                }
            } else {
                rootCategories.push(categoryMap[category.id]);
            }
        });

        return { rootCategories, categoryMap };
    }


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


        const {rootCategories, categoryMap} = this.createCategoryTree(data)

       

        return this.createSuccessResponse({
            categories: data,
            categoryTree: rootCategories,
            categoryMap: categoryMap
        });
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

        let childrenCategories = categories.filter(category => category.parent?.id == selectCategory.id)

        data = {
            ...selectCategory,
            children: childrenCategories,
        }

        return this.createSuccessResponse(data);
    }
}