import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IUser {
  payload: {
    firstname: string;
    lastname: string;
    phone: string;
    city: string;
    state: string;
    zipCode: string;
    address: string;
    country: string;
    email: string;
    role: string;
  };
}

export const userSlice = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getUserProfile: builder.query<IUser, void>({
      query: () => ({ url: '/user/me' }),
    }),
    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: '/user/me',
        method: 'PUT',
        body: { ...data },
      }),
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } = userSlice;
