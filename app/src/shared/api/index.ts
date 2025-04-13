export interface Response<T> {
    success: boolean;
    code: number;
    data?: T;
    error?: {
        text: string;
    };
}

export interface ErrorResponse {
    success: false;
    code: number;
    error: {
        text: string;
    };
    data?: never;
}

export const emulateAPI = {
    success: <T>(data: T, code = 200): Promise<Response<T>> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve({
                success: true,
                code,
                data,
            }), 300);
        });
    },

    error: (error: string, code = 404): Promise<ErrorResponse> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve({
                success: false,
                code,
                error: { text: error },
            }), 700);
        });
    }
}