export interface Category {
    id: string;
    slug: string;
    title: string;
    parent?: Category;
    children?: Category[];
    selections?: Selection[];
}