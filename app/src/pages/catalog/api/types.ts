export interface Category {
    id: string;
    slug: string;
    title: string;
    parent?: Category;
    children?: Category[];
}

export type Catalog = {
    categories: Category[],
    categoryTree: any,
    categoryMap: any,

}