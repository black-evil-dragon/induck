import { emulateAPI, Response } from "@shared/api";
import { categories } from "@shared/data/catalog";
import { Selection, selections } from "@shared/data/task";



export const SelectionAPI = {
    async getSelectionBySlug(slug: string): Promise<Response<Selection>> {
        try {
            const selection = selections.find(item => item.slug === slug);

            if (!selection) return emulateAPI.error(`Задание '${slug}' не найдено`, 404);

            const category = categories.find(item => item.id === selection.category.id)
            
            if (category) {
                selection.category = {
                    ...selection.category,
                    title: category.title,
                    slug: category.slug,
                }
            }

            return await emulateAPI.success(selection);
        } catch (error) {
            console.error('Quiz fetch error:', error);
            return emulateAPI.error('Ошибка при загрузке подборки', 500);
        }
    },

    async getTask(): Promise<Response<string>> {
        try {
            return await emulateAPI.success('Приложение работает!');
        } catch (error) {
            console.error('Quiz fetch error:', error);
            return emulateAPI.error('Ошибка при загрузке теста', 500);
        }
    }
}