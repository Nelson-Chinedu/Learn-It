import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authSlice = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Bio', 'Profile'],
  endpoints: (builder) => ({
    createNewUser: builder.mutation({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        body: { ...data },
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/signin',
        method: 'POST',
        body: { ...data },
      }),
      invalidatesTags: ['Bio', 'Profile'],
    }),
  }),
});

export const { useCreateNewUserMutation, useLoginMutation } = authSlice;
