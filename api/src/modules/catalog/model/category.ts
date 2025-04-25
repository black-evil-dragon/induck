import { BaseAttributes, BaseMeta, BaseModel } from "@modules/base/model";


export type CategoryLink = {
    id: string;
}

export interface Category
extends
    BaseModel,
    BaseMeta, BaseAttributes
{
    title: string;

    parent?: CategoryLink;

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