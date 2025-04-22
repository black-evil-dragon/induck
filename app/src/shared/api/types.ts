import { AxiosRequestConfig } from "axios";

export interface ApiConfig extends AxiosRequestConfig {
    withToken?: boolean;
    retry?: boolean;
}

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface SuccessResponse<T = any> {
    success: true;
    data: T;
    timestamp: string;
}

export interface ErrorResponse {
    success: false;
    error: {
        code: string;
        message: string;
    };
    timestamp: string;
}

// export type Response<T> = SuccessResponse<T> | ErrorResponse;
export interface Response<T = any> {
    success: boolean;
    data?: T;
    error?: {
        code: string;
        message: string;
    };
    code: number;
    timestamp?: string;
}