import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IEnrollCourse } from 'src/interface/enroll';
import { IResource } from 'src/interface/resource';
import { ICategory } from 'src/interface/category';

export const studentSlice = createApi({
  reducerPath: 'student',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Category', 'Resource', 'Course', 'EnrollCourse'],
  endpoints: (builder) => ({
    getCategory: builder.query<ICategory, void>({
      query: () => ({ url: '/category/all' }),
      providesTags: ['Category'],
    }),

    addCategory: builder.mutation({
      query: (data) => ({
        url: '/category',
        method: 'POST',
        body: { ...data },
      }),
      invalidatesTags: ['Category'],
    }),

    addResource: builder.mutation({
      query: (data) => ({
        url: '/resource',
        method: 'POST',
        body: { ...data },
      }),
      invalidatesTags: ['Resource'],
    }),

    getResource: builder.query<IResource, string | number>({
      query: (id) => ({
        url: `/resource/all?category=${id}`,
      }),
      providesTags: ['Resource'],
    }),
    enrollCourse: builder.mutation({
      query: (data) => ({
        url: '/course/enroll',
        method: 'POST',
        body: { ...data },
      }),
      invalidatesTags: ['EnrollCourse'],
    }),
    getEnrollCourse: builder.query<IEnrollCourse, void>({
      query: () => ({
        url: '/course/enroll',
      }),
      providesTags: ['EnrollCourse'],
    }),
    unEnrollCourse: builder.mutation({
      query: (id) => ({
        url: `/course/unenroll/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['EnrollCourse'],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useAddResourceMutation,
  useGetResourceQuery,
  useEnrollCourseMutation,
  useGetEnrollCourseQuery,
  useUnEnrollCourseMutation,
} = studentSlice;
