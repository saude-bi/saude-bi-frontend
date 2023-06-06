import { Entity, PaginatedResponse, PaginationQuery } from '@/types/common';
import { baseApi } from './api';

export const injectFindById = <T extends Entity>(name: string, endpoint: string) => {
  const entityApi = baseApi.enhanceEndpoints({ addTagTypes: [endpoint] }).injectEndpoints({
    endpoints: (build) => ({
      [name]: build.query<T, number>({
        query: (id) => ({ url: endpoint + '/' + id }),
        providesTags: (_, __, id) => [{ type: endpoint, id }],
      }),
    }),
  });

  return entityApi;
};

export const injectFindAll = <T extends Entity>(name: string, endpoint: string) => {
  return baseApi.enhanceEndpoints({ addTagTypes: [endpoint] }).injectEndpoints({
    endpoints: (build) => ({
      [name]: build.query<PaginatedResponse<T>, PaginationQuery | void>({
        query: (params) => ({ url: endpoint, params: params || undefined }),
        providesTags: (result) =>
          result
            ? [
                ...result.data.map(({ id }) => ({ type: endpoint, id })),
                { type: endpoint, id: 'PAGE' },
              ]
            : [{ type: endpoint, id: 'PAGE' }],
      }),
    }),
  });
};

export const injectUpdate = <T extends Entity>(name: string, endpoint: string) => {
  return baseApi.enhanceEndpoints({ addTagTypes: [endpoint] }).injectEndpoints({
    endpoints: (build) => ({
      [name]: build.mutation<T, { id: number; body: Partial<T> }>({
        query: ({ id, body }) => ({ url: endpoint + '/' + id, method: 'PATCH', body }),
        invalidatesTags: (_, __, { id }) => [{ type: endpoint, id }],
      }),
    }),
  });
};

export const injectCreate = <T extends Entity>(name: string, endpoint: string) => {
  return baseApi.enhanceEndpoints({ addTagTypes: [endpoint] }).injectEndpoints({
    endpoints: (build) => ({
      [name]: build.mutation<T, Partial<T>>({
        query: (body) => ({ url: endpoint, body, method: 'POST' }),
        invalidatesTags: () => [{ type: endpoint, id: 'PAGE' }],
      }),
    }),
  });
};

export const injectRemove = (name: string, endpoint: string) => {
  return baseApi.enhanceEndpoints({ addTagTypes: [endpoint] }).injectEndpoints({
    endpoints: (build) => ({
      [name]: build.mutation<null, number>({
        query: (id) => ({ url: endpoint + '/' + id, method: 'DELETE' }),
        invalidatesTags: (_, __, id) => [{ type: endpoint, id }],
      }),
    }),
  });
};
