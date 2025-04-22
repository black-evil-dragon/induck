// api/apiClient.ts
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { ApiConfig, ErrorResponse, ApiMethod, Response, SuccessResponse } from './types';


export class ApiClient {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string, config?: ApiConfig) {
        this.axiosInstance = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                ...config?.headers,
            },
            ...config,
        });

        this.setupInterceptors();
    }

    private setupInterceptors(): void {
        this.axiosInstance.interceptors.request.use(
            (config) => {
                // Здесь можно добавить логику для токена
                // if (config.withToken) {
                //   const token = localStorage.getItem('token');
                //   if (token) {
                //     config.headers.Authorization = `Bearer ${token}`;
                //   }
                // }
                return config;
            },
            (error) => Promise.resolve(error)
        );

        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse<Response>) => {
                return response;
            },
            (error: AxiosError) => {
                if (error.response) return error.response;

                return {
                    success: false,
                    error: {},
                    timestamp: '',
                }
            }
        );
    }

    public async request<T = any>(
        method: ApiMethod,
        url: string,
        data?: any,
        config?: ApiConfig
    ): Promise<Response<T>> {
        const requestConfig: AxiosRequestConfig = {
            method,
            url,
            ...config,
        };

        if (method === 'GET' || method === 'DELETE') {
            requestConfig.params = data;
        } else {
            requestConfig.data = data;
        }

        const response = await this.axiosInstance.request<Response<T>>(requestConfig)

        return response.data
    }

    public async get<T = any>(url: string, params?: any, config?: ApiConfig): Promise<Response<T>> {
        return this.request<T>('GET', url, params, config);
    }

    public async post<T = any>(url: string, data?: any, config?: ApiConfig): Promise<Response<T>> {
        return this.request<T>('POST', url, data, config);
    }

    public async put<T = any>(url: string, data?: any, config?: ApiConfig): Promise<Response<T>> {
        return this.request<T>('PUT', url, data, config);
    }

    public async patch<T = any>(url: string, data?: any, config?: ApiConfig): Promise<Response<T>> {
        return this.request<T>('PATCH', url, data, config);
    }

    public async delete<T = any>(url: string, params?: any, config?: ApiConfig): Promise<Response<T>> {
        return this.request<T>('DELETE', url, params, config);
    }
}