import { API, Response } from '@shared/api'
import { Category } from './types';



export const CatalogAPI = {
    async getCatalog(slug?: string): Promise<Response<Category[] | Category>> {
        let params = slug ? {
            slug: slug
        } : {}
        const response = await API.get<Category[]>('/catalog/', params)

        return response
    }
};