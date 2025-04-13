import { categories, Category } from "@shared/data/catalog";
import { selections } from "@shared/data/task";

import { emulateAPI, Response } from '@shared/api'



export const CatalogAPI = {
    async getCatalog(id?: string): Promise<Response<Category[]>> {
        try {
            if (id) {
                return await emulateAPI.success(categories.filter((category) => category.parent?.id == id));
            } else {
                return await emulateAPI.success(categories.filter((category) => category.parent == undefined));
            }
        } catch (error) {
            console.error('Catalog fetch error:', error);
            return emulateAPI.error('Не удалось загрузить каталог', 500);
        }
    },

    async getCategoryBySlug(slug: string): Promise<Response<Category>> {
        try {
            const category = categories.find(c => c.slug === slug);

            if (!category) {
                return emulateAPI.error(`Категория '${slug}' не найдена`, 404);
            }

            category.selections = selections.filter(quiz => quiz.category.id === category.id)

            return await emulateAPI.success(category);
        } catch (error) {
            console.error('Category fetch error:', error);
            return emulateAPI.error('Ошибка при загрузке категории', 500);
        }
    },
};