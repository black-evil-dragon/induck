export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: {
        code: string;
        message: string;
    };
    timestamp: string;
}

export interface SuccessResponse<T> extends ApiResponse<T> {
    success: true;
    data: T;
}

export interface ErrorResponse extends ApiResponse<never> {
    success: false;
    error: {
        code: string;
        message: string;
    };
}