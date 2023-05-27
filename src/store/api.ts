import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { createApi } from '@reduxjs/toolkit/dist/query/react';
import Cookie from 'universal-cookie';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
    credentials: 'same-origin',
    mode: 'cors',
    prepareHeaders: (headers) => {
      const cookies = new Cookie();
      const token = cookies.get('token');

      if (token) {
        console.log(token);
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
