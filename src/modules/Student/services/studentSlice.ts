import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ICategoryPayload {
  id: string;
  name: string;
}

interface ICategory {
  payload: ICategoryPayload[];
}

interface IResource {
  payload: {
    id: string;
    name: string;
    url: string;
  }[];
}

export const studentSlice = createApi({
  reducerPath: 'student',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Category', 'Resource', 'Course'],
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
  }),
});

export const {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useAddResourceMutation,
  useGetResourceQuery,
} = studentSlice;
