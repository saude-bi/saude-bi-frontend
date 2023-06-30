import { setCookie, deleteCookie } from 'cookies-next';
import { LoginFormDto, UserInfo } from '@/types/user';
import { TokenResponse } from '@/types/auth';
import { baseApi } from './api';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrentUser: build.query<UserInfo, void>({
      query: () => ({
        url: `auth`,
      }),
      keepUnusedDataFor: 0.0001,
    }),

    login: build.mutation<TokenResponse, LoginFormDto>({
      query: (body) => ({
        url: `auth`,
        method: 'POST',
        body,
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            setCookie('token', data.access_token);
          }
        } catch (err) {
          console.error(err);
          logoutUser();
        }
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetCurrentUserQuery, useLoginMutation } = authApi;

export const logoutUser = () => {
  deleteCookie('token');
  switchWorkRelation();
  authApi.util.resetApiState();
};

export const switchWorkRelation = () => {
  deleteCookie('workRelation');
};
