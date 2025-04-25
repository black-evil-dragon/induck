import { BaseAttributes, BaseMeta, BaseModel } from "@modules/base/model";


/* ============================================
*               Question section
? [TaskQuestion] - Интерфейсы вопросов для задания
============================================ */
export interface TaskQuestionLink {
    id: string;
}

export interface TaskQuestion
extends
    BaseModel 
{
    categoryId: string;
    value: string;
}



/* ============================================
*               Answer section
? [TaskAnswer] - Интерфейсы ответов на вопросы для задания
============================================ */
export interface TaskAnswer {
    [id: string]: {
        choiceId: string;
        alternative_ids?: string[];
    }
}


/* ============================================
*               Task section
? [Task] - Интерфейсы ответов на вопросы для задания
============================================ */
export interface Task
    extends
    BaseModel, BaseAttributes, BaseMeta
{
    defaultChoices: {
        id: string;
        value: string;
    }[];


    details?: {
        difficulty?: 0;
    }


    questions: TaskQuestion[];

    answers: TaskAnswer;

}




/* ============================================
*               Example Data
============================================ */
export const questions: TaskQuestion[] = [
    {
        id: "ask321oasddf0",
        categoryId: "12hpanc9audalw13gp9j",
        value: "ш_рох",
    },
    {
        id: "sf3r1sfa35",
        value: "ш_пот",
        categoryId: "12hpanc9audalw13gp9j",
    },
]




export const exampleTask: Task = {
    id: "12hpanc9audalw13gp9j",

    defaultChoices: [
        { id: '3f9a', value: 'а' },
        { id: 'b7c2', value: 'е' },
        { id: 'd8e4', value: 'ё' },
        { id: 'f9g6', value: 'и' },
        { id: 'h0j8', value: 'о' },
        { id: 'k1l9', value: 'у' },
        { id: 'm2n0', value: 'ы' },
        { id: 'p3q7', value: 'э' },
        { id: 'r4s5', value: 'ю' },
        { id: 't5u1', value: 'я' },
    ],

    questions: [],

    answers: {
        "ask321oasddf0": {
            choiceId: 'h0j8',
        },
        "sf3r1sfa35": {
            choiceId: 'd8e4',
        }
    }
}