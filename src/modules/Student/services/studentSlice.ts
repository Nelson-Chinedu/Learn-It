import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IEnrollCourse } from 'src/interface/enroll';
import {
  IResource,
  IAddResourceProp,
  IAddResourceResponse,
  IGetResourceProp,
} from 'src/interface/resource';
import {
  ICategory,
  IAddCategoryProp,
  IAddCategoryResponse,
} from 'src/interface/category';
import {
  IEnrollCourseResponse,
  IEnrollCourseProp,
  IUnEnrollCourseProp,
  IGetEnrollCourseDetailProp,
  IGetEnrollCourseDetailResponse,
} from 'src/interface/course';

export const studentSlice = createApi({
  reducerPath: 'student',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Category', 'Resource', 'Course', 'EnrollCourse'],
  endpoints: (builder) => ({
    getCategory: builder.query<ICategory, string>({
      query: (userId) => ({ url: `/category/${userId}/` }),
      providesTags: ['Category'],
    }),

    addCategory: builder.mutation<IAddCategoryResponse, IAddCategoryProp>({
      query: ({ userId, payload }) => ({
        url: `/category/${userId}/`,
        method: 'POST',
        body: { ...payload },
      }),
      invalidatesTags: ['Category'],
    }),

    addResource: builder.mutation<IAddResourceResponse, IAddResourceProp>({
      query: ({ userId, payload }) => ({
        url: `/resources/${userId}/`,
        method: 'POST',
        body: { ...payload },
      }),
      invalidatesTags: ['Resource'],
    }),

    getResource: builder.query<IResource, IGetResourceProp>({
      query: ({ userId, categoryId }) => ({
        url: `/category/${userId}/resources?categoryId=${categoryId}`,
      }),
      providesTags: ['Resource'],
    }),
    enrollCourse: builder.mutation<IEnrollCourseResponse, IEnrollCourseProp>({
      query: ({ userId, courseId }) => ({
        url: `/courses/${userId}/enroll/${courseId}/`,
        method: 'POST',
      }),
      invalidatesTags: ['EnrollCourse'],
    }),
    getEnrollCourse: builder.query<IEnrollCourse, string>({
      query: (userId) => ({
        url: `/courses/${userId}/enroll/`,
      }),
      providesTags: ['EnrollCourse'],
    }),
    unEnrollCourse: builder.mutation<void, IUnEnrollCourseProp>({
      query: ({ userId, id }) => ({
        url: `/courses/${userId}/unenroll/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['EnrollCourse'],
    }),
    getEnrollCourseDetail: builder.query<
      IGetEnrollCourseDetailResponse,
      IGetEnrollCourseDetailProp
    >({
      query: ({ userId, courseId }) => ({
        url: `/courses/${userId}/enroll/${courseId}/`,
      }),
    }),
    subscribe: builder.mutation({
      query: ({ userId }) => ({
        url: `/users/${userId}/subscribe/`,
        method: 'PATCH',
      }),
    }),
    verifyPayment: builder.query<any, any>({
      query: ({ reference }) => ({
        url: `/users/payment/${reference}/verify/`,
        method: 'GET',
      }),
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
  useGetEnrollCourseDetailQuery,
  useSubscribeMutation,
  useVerifyPaymentQuery,
} = studentSlice;
