import { categories, Category } from "@shared/data/catalog";
import { selections } from "@shared/data/task";

import { API, Response } from '@shared/api'



export const CatalogAPI = {
    async getCatalog(id?: string): Promise<Response<Category[]>> {
        const response = await API.get<Category[]>('/catalog/')

        return response
    }
};