import { CategoryLink } from "./catalog";


export interface Selection {
    id: string;
    slug: string;
    title: string;
    category: CategoryLink;

    details?: {

    };

}

export const selections: Selection[] = [
    {
        id: "as12asd14sad1",
        slug: "spelling-of-roots",
        category: {
            id: "asd1q35rfa3"
        },
        title: "Правописание корней",
    },
]


export const tasks = [
    {
        id: "sopifughljk1324",
        selection: {
            id: "as12asd14sad1",
        },
        defaultOptions: [
            "а",
            "е",
            "и",
            "о",
            "у",
            "ы",
            "э",
            "ю",
            "я"
        ],
        details: {
            difficulty: 0,
        },

        tasks: [
            {
                id: "ask321oasddf0",
                value: "ш_рох",
            },
            {
                id: "sf3r1sfa35",
                value: "ш_пот",
            },
        ],
        answers: [
            {
                id: "ask321oasddf0",
                value: "о",
            },
            {
                id: "sf3r1sfa35",
                value: "е",
            },
        ]
    }
]
