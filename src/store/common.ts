import { Entity, PaginatedResponse, PaginationQuery } from '@/types/common';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/dist/query';
import { UseMutation, UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { baseApi } from './api';

export type GenericFindByIdQuery<T extends Entity> = UseQuery<
  QueryDefinition<
    number,
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
    string,
    T
  >
>;

type InjectOptions = { addTagTypes: string[]; invalidatesTags: [{ type: string; id?: string }] };

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

export const injectFindByIdChild = <T extends Entity, U = {}>(name: string, endpoint: string) => {
  const entityApi = baseApi.enhanceEndpoints({ addTagTypes: [endpoint] }).injectEndpoints({
    endpoints: (build) => ({
      [name]: build.query<T, { id: number; params: U }>({
        query: ({ id, params }) => ({
          url: endpoint.replace('[slug]', id.toString()),
          params: params || undefined,
        }),
        providesTags: (_, __, { id }) => [{ type: endpoint, id }],
      }),
    }),
  });

  return entityApi;
};

export type GenericFindAllQuery<T extends Entity, U = { name?: string }> = UseQuery<
  QueryDefinition<
    void | (PaginationQuery & U),
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
    string,
    PaginatedResponse<T>
  >
>;

export const injectFindAll = <T extends Entity, U = {}>(name: string, endpoint: string) => {
  return baseApi.enhanceEndpoints({ addTagTypes: [endpoint] }).injectEndpoints({
    endpoints: (build) => ({
      [name]: build.query<PaginatedResponse<T>, (PaginationQuery & U) | void>({
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

export type GenericCreateMutation<T extends Entity, U = Partial<T>> = UseMutation<
  MutationDefinition<
    U,
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
    string,
    T
  >
>;

export const injectCreate = <T extends Entity, U = Partial<T>>(name: string, endpoint: string) => {
  return baseApi.enhanceEndpoints({ addTagTypes: [endpoint] }).injectEndpoints({
    endpoints: (build) => ({
      [name]: build.mutation<T, U>({
        query: (body) => ({ url: endpoint, body, method: 'POST' }),
        invalidatesTags: () => [{ type: endpoint, id: 'PAGE' }],
      }),
    }),
  });
};

export const injectCreateChild = <T extends Entity, U = Partial<T>>(
  name: string,
  endpoint: string,
  options?: InjectOptions
) => {
  return baseApi
    .enhanceEndpoints({ addTagTypes: [endpoint, ...(options?.addTagTypes || [])] })
    .injectEndpoints({
      endpoints: (build) => ({
        [name]: build.mutation<T, { id: number; body: U }>({
          query: ({ id, body }) => ({
            url: endpoint.replace('[slug]', id.toString()),
            body,
            method: 'POST',
          }),
          invalidatesTags: () => [
            { type: endpoint, id: 'PAGE' },
            ...(options?.invalidatesTags || []),
          ],
        }),
      }),
    });
};

export type GenericUpdateMutation<T extends Entity, U = Partial<T>> = UseMutation<
  MutationDefinition<
    { id: number; body: U },
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
    string,
    T
  >
>;

export const injectUpdate = <T extends Entity, U = Partial<T>>(name: string, endpoint: string) => {
  return baseApi.enhanceEndpoints({ addTagTypes: [endpoint] }).injectEndpoints({
    endpoints: (build) => ({
      [name]: build.mutation<T, { id: number; body: U }>({
        query: ({ id, body }) => ({ url: endpoint + '/' + id, method: 'PATCH', body }),
        invalidatesTags: (_, __, { id }) => [{ type: endpoint, id }],
      }),
    }),
  });
};

export type GenericRemoveMutation = UseMutation<
  MutationDefinition<
    number,
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
    string,
    null
  >
>;

export const injectRemove = (name: string, endpoint: string) => {
  return baseApi.enhanceEndpoints({ addTagTypes: [endpoint] }).injectEndpoints({
    endpoints: (build) => ({
      [name]: build.mutation<null, number>({
        query: (id) => ({ url: endpoint + '/' + id, method: 'DELETE' }),
        invalidatesTags: (_, __, id) => [
          { type: endpoint, id },
          { type: endpoint, id: 'PAGE' },
        ],
      }),
    }),
  });
};

export const injectRemoveChild = (name: string, endpoint: string, options?: InjectOptions) => {
  return baseApi
    .enhanceEndpoints({ addTagTypes: [endpoint, ...(options?.addTagTypes || [])] })
    .injectEndpoints({
      endpoints: (build) => ({
        [name]: build.mutation<null, { idDomain: number; idChild: number }>({
          query: ({ idDomain, idChild }) => ({
            url: endpoint.replace('[slug]', idDomain.toString()) + '/' + idChild,
            method: 'DELETE',
          }),
          invalidatesTags: (_, __, { idChild }) => [
            { type: endpoint, id: idChild },
            { type: endpoint, id: 'PAGE' },
            ...(options?.invalidatesTags || []),
          ],
        }),
      }),
    });
};
