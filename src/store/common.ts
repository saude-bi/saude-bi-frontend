import { PaginatedResponse, PaginationQuery } from '@/types/common';
import { baseApi } from './api';

export const injectFindById = <T>(name: string, endpoint: string) => {
  const entityApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
      [name]: build.query<T, number>({
        query: (id) => ({ url: endpoint + '/' + id }),
      }),
    }),
  });

  return entityApi;
};

// FIXME response is not in paginated interface
export const injectFindAll = <T>(name: string, endpoint: string) => {
  const entityApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
      [name]: build.query<PaginatedResponse<T>, PaginationQuery | void>({
        query: (params) => ({ url: endpoint, params: params || undefined }),
      }),
    }),
  });

  return entityApi;
};

export const injectUpdate = <T>(name: string, endpoint: string) => {
  const entityApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
      [name]: build.mutation<T, { id: number; body: Partial<T> }>({
        query: ({ id, body }) => ({ url: endpoint + '/' + id, method: 'PATCH', body }),
      }),
    }),
  });

  return entityApi;
};

export const injectCreate = <T>(name: string, endpoint: string) => {
  const entityApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
      [name]: build.mutation<T, Partial<T>>({
        query: (body) => ({ url: endpoint, body, method: 'POST' }),
      }),
    }),
  });

  return entityApi;
};

export const injectRemove = (name: string, endpoint: string) => {
  const entityApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
      [name]: build.mutation<null, number>({
        query: (id) => ({ url: endpoint + '/' + id, method: 'DELETE' }),
      }),
    }),
  });

  return entityApi;
};
