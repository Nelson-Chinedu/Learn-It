import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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

export const teacherSlice = createApi({
  reducerPath: 'teacher',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Bio', 'Course'],
  endpoints: (builder) => ({
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
      invalidatesTags: ['Course'],
    }),

    getCourses: builder.query<ICourses, void>({
      query: () => ({ url: '/courses' }),
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
