const route = '/task'

export const paths = {
    root: route,
    taskId: ':taskId',
    categoryId: ':categoryId',

    getTaskByID: `${route}/id`,
    getRandomTask: `${route}/random`,
}