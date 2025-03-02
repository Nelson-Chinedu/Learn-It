import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  BaseQueryFn,
  FetchArgs,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

import { ICourses, IAddCourseResponse } from 'src/interface/course';
import { IBio, IUpdateResponseProp } from 'src/interface/bio';

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

export const teacherSlice = createApi({
  reducerPath: 'teacher',
  baseQuery: customFetchBase,
  tagTypes: ['Bio', 'Course', 'Subscription', 'Task'],
  endpoints: (builder) => ({
    updateBio: builder.mutation<void, IUpdateResponseProp>({
      query: ({ userId, payload }) => ({
        url: `/users/${userId}/bio/`,
        method: 'PATCH',
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
    getMentees: builder.query<any, any>({
      query: ({ id }) => ({
        url: `/subscription/${id}/mentees/`,
        method: 'GET',
      }),
      providesTags: ['Subscription'],
    }),
    getSubscriptions: builder.query<any, any>({
      query: ({ id }) => ({
        method: 'GET',
        url: `/subscription/${id}`,
      }),
    }),
    getStudentCounts: builder.query<any, any>({
      query: ({ id }) => ({
        method: 'GET',
        url: `/subscription/${id}/count`,
      }),
    }),
    getAssignedTasks: builder.query<any, any>({
      query: ({ mentorId, menteeId }) => ({
        method: 'GET',
        url: `/task/${menteeId}/mentor/${mentorId}`,
      }),
      providesTags: ['Task'],
    }),
    getMenteeDetail: builder.query<any, any>({
      query: ({ mentorId, menteeId }) => ({
        method: 'GET',
        url: `/subscription/${menteeId}/mentee/${mentorId}`,
      }),
    }),
    addTask: builder.mutation<IAddCourseResponse, any>({
      query: ({ mentorId, data }) => ({
        url: `/task/${mentorId}/mentor`,
        method: 'POST',
        body: { ...data },
      }),
      invalidatesTags: ['Task'],
    }),
    getMenteeSubmission: builder.query<any, any>({
      query: ({ mentorId, taskId }) => ({
        method: 'GET',
        url: `/task/${taskId}/mentor/${mentorId}/submission`,
      }),
    }),
    provideFeedback: builder.mutation<IAddCourseResponse, any>({
      query: ({ params, data }) => ({
        url: `/task/${params.taskId}/mentor/${params.mentorId}`,
        method: 'PATCH',
        body: { ...data },
      }),
      invalidatesTags: ['Task'],
    }),
    getFeedback: builder.query<any, any>({
      query: ({ mentorId, taskId }) => ({
        method: 'GET',
        url: `/task/${taskId}/mentor/${mentorId}/feedback`,
      }),
      providesTags: ['Task'],
    }),
  }),
});

export const {
  useUpdateBioMutation,
  useGetUserBioQuery,
  useAddCourseMutation,
  useGetCoursesQuery,
  useGetMenteesQuery,
  useGetSubscriptionsQuery,
  useGetStudentCountsQuery,
  useGetAssignedTasksQuery,
  useGetMenteeDetailQuery,
  useAddTaskMutation,
  useGetMenteeSubmissionQuery,
  useProvideFeedbackMutation,
  useGetFeedbackQuery,
} = teacherSlice;
