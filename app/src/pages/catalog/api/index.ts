import { API, Response } from '@shared/api'


import { Catalog, Category } from './types';




export const CatalogAPI = {
    // Category[] | Category
    async getCatalog(options: {
        slug?: string,
        id?: string
    }): Promise<Response<Catalog | Category>> {
        let params: {
            slug?: string;
            id?: string;
        } = {}

        let path = '/catalog'

        if (options.slug || options.id) {
            if (options.slug) {
                params.slug = options.slug
            }
            if (options.id) {
                params.id = options.id
            }

            path = `${path}/category`
        }

        const response = await API.get<Catalog | Category>(path, params)

        return response
    }
};