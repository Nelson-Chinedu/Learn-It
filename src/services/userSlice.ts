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
    mentorBio?: string;
  };
}

export const userSlice = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Profile'],
  endpoints: (builder) => ({
    getUserProfile: builder.query<IUser, void>({
      query: () => ({ url: '/user/me' }),
      providesTags: ['Profile'],
    }),
    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: '/user/me',
        method: 'PUT',
        body: { ...data },
      }),
      invalidatesTags: ['Profile'],
    }),
    updateProfilePicture: builder.mutation({
      query: (data) => ({
        url: '/user/profile',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useUpdateProfilePictureMutation,
} = userSlice;
