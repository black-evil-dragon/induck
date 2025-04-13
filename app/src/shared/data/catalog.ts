import { Selection } from "./task";

export interface Category {
    id: string;
    slug: string;
    title: string;
    parent?: Category;
    children?: Category[];
    selections?: Selection[];
}

export interface CategoryLink {
    id: string;
    title?: string;
    slug?: string;
}

export const categories: Category[] = [
    {
        id: "asd1q35rfa3",
        slug: "spelling",
        title: "Орфография",
    },
    {
        id: "yjrwehy414sf462f",
        slug: "grammar",
        title: "Грамматика",
    },
    {
        id: "asojd1234asdp1",
        slug: "vocabulary",
        title: "Лексика",
    },
];