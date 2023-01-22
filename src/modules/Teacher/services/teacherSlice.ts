import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  ICourses,
  // IAddCourseProp,
  IAddCourseResponse,
} from 'src/interface/course';
import { IBio, IUpdateResponseProp } from 'src/interface/bio';

export const teacherSlice = createApi({
  reducerPath: 'teacher',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Bio', 'Course'],
  endpoints: (builder) => ({
    updateBio: builder.mutation<void, IUpdateResponseProp>({
      query: ({ userId, payload }) => ({
        url: `/users/${userId}/bio/`,
        method: 'PUT',
        body: { ...payload },
      }),
      invalidatesTags: ['Bio'],
    }),

    getUserBio: builder.query<IBio, string>({
      query: (userId) => ({
        url: `/users/${userId}/bio/`,
      }),
      providesTags: ['Bio'],
    }),

    addCourse: builder.mutation<IAddCourseResponse, any>({
      query: (data) => ({
        url: '/courses/',
        method: 'POST',
        body: { ...data },
      }),
      invalidatesTags: ['Course'],
    }),

    getCourses: builder.query<ICourses, string>({
      query: (userId) => ({ url: `/courses/${userId}/` }),
      providesTags: ['Course'],
    }),
  }),
});

export const {
  useUpdateBioMutation,
  useGetUserBioQuery,
  useAddCourseMutation,
  useGetCoursesQuery,
} = teacherSlice;
