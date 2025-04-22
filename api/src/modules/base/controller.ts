import { Response } from 'express';


import { ErrorResponse, SuccessResponse } from './types';



export abstract class BaseController<T> {
    protected service: T;

    constructor(service: T) {
        this.service = service;
    }

    protected sendResponse<D>(
        res: Response,
        data: SuccessResponse<D>,
        statusCode = 200
    ): Response {
        return res.status(statusCode).json(data);
    }

    protected handleError(
        res: Response,
        error: Error | string,
        errorCode = 'INTERNAL_ERROR',
        statusCode = 500
    ): Response {
        const response: ErrorResponse = {
            success: false,
            error: {
                code: errorCode,
                message: typeof error === 'string' ? error : error.message
            },
            timestamp: new Date().toISOString()
        };

        return res.status(statusCode).json(response);
    }
}