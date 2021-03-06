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

export interface ICourse {
  name: string;
  price: string;
  count: string;
  video: string[];
}

interface ICourses {
  payload: ICourse[];
}

interface IBio {
  payload: {
    bio: {
      mentorBio: string;
    };
  };
}

export const userSlice = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Bio', 'Profile'],
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
    updateBio: builder.mutation({
      query: (data) => ({
        url: '/user/me/bio',
        method: 'PUT',
        body: { ...data },
      }),
      invalidatesTags: ['Bio'],
    }),
    getUserBio: builder.query<IBio, void>({
      query: () => ({ url: '/user/me/bio' }),
      providesTags: ['Bio'],
    }),
    addCourse: builder.mutation({
      query: (data) => ({
        url: '/add/course',
        method: 'POST',
        body: { ...data },
      }),
    }),
    getCourses: builder.query<ICourses, void>({
      query: () => ({ url: '/course/all' }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useUpdateBioMutation,
  useGetUserBioQuery,
  useAddCourseMutation,
  useGetCoursesQuery,
} = userSlice;
