import { getCookie } from 'cookies-next';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
    credentials: 'same-origin',
    mode: 'cors',
    prepareHeaders: (headers) => {
      const token = getCookie('token');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
