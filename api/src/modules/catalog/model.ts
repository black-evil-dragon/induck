
export interface CategoryAttributes {
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export interface CategoryMeta {
    meta?: {
        metaTitle?: string;
        metaDescription?: string;
        metaKeywords?: string[];
    }
}
export interface Category extends CategoryMeta, CategoryAttributes {
    id: string;
    slug: string;
    title: string;

    parent?: {
        id: string;
    };

    description?: string;
}


export const categories: Category[] = [
    {
        id: "asd1q35rfa3",
        slug: "spelling",
        title: "Орфография",

        isActive: true,
    },
    {
        id: "as12asd14sad1",
        slug: "spelling-of-roots",
        title: "Правописание корней",

        isActive: true,

        parent: {
            id: "asd1q35rfa3"
        }
    },


    {
        id: "yjrwehy414sf462f",
        slug: "grammar",
        title: "Грамматика",

        isActive: false,
    },
    {
        id: "asojd1234asdp1",
        slug: "vocabulary",
        title: "Лексика",

        isActive: false,
    },
];