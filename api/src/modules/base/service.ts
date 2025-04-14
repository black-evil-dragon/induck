import { SuccessResponse } from "./types";

export abstract class BaseService {
    protected createSuccessResponse<T>(data: T): SuccessResponse<T> {
        return {
            success: true,
            data,
            timestamp: new Date().toISOString()
        };
    }
}