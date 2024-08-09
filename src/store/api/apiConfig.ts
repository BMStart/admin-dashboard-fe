import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getCookieValue } from '@/utils/utils';

axios.defaults.withCredentials = true;
axios.interceptors.request.use((request: any) => {
  // const selectLang = localStorage.getItem('i18nextLng');
  if (request.headers) {
    request.headers.Authorization = `Bearer ${getCookieValue('_auth_token_')}`;
    // request.headers['Accept-Language'] = selectLang || 'en';
  }
  return request;
});

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.log('Unauthorized');
    }
    return Promise.reject(error);
  },
);

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });

      return {
        data: {
          ...result.data,
          status: result.status,
        },
      };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

const cacheTags: string[] = ['Products', 'Recipes'];

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL_APP as string,
  }),
  tagTypes: cacheTags,
  endpoints: () => ({}),
});
