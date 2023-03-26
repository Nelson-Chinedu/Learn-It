import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  BaseQueryFn,
  FetchArgs,
} from '@reduxjs/toolkit/query/react';

import { Mutex } from 'async-mutex';

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

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  credentials: 'include',
});

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshResult = await baseQuery(
          { credentials: 'include', url: 'auth/refresh' },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          // Retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          window.location.href = '/auth/signin';
          localStorage.removeItem('clu');
          localStorage.removeItem('csu');
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const studentSlice = createApi({
  reducerPath: 'student',
  baseQuery: customFetchBase,
  tagTypes: ['Category', 'Resource', 'Course', 'EnrollCourse', 'Subscription'],
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
    // subscribe: builder.mutation({
    //   query: ({ userId }) => ({
    //     url: `/users/${userId}/subscribe/`,
    //     method: 'PATCH',
    //   }),
    // }),
    verifyPayment: builder.query<any, any>({
      query: ({ reference }) => ({
        url: `/subscription/${reference}/verify-payment/`,
        method: 'GET',
      }),
    }),
    subscribe: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/subscription/${userId}/`,
        method: 'POST',
        body: { ...data },
      }),
      invalidatesTags: ['Subscription'],
    }),
    getAllMentors: builder.query<any, void>({
      query: () => ({
        url: '/subscription/mentors/all/',
        method: 'GET',
      }),
    }),
    getMentors: builder.query<any, any>({
      query: ({ id }) => ({
        url: `/subscription/${id}/mentors/`,
        method: 'GET',
      }),
      providesTags: ['Subscription'],
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
  useGetAllMentorsQuery,
  useGetMentorsQuery,
} = studentSlice;
