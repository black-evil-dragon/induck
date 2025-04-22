import { ApiClient } from './client';

const BASE_URL = 'http://localhost:5000/api/v1';

export const API = new ApiClient(BASE_URL, {
    timeout: 10000,
    withToken: true,
});

export * from './types';
