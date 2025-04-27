import { API, Response } from '@shared/api'







export const TaskAPI = {

    async getRandomTask(options: any): Promise<Response<any>> {
        

        const response = await API.post<any>('/task/generate-random')

        return response
    }
};