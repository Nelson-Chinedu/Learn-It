import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IUserData } from 'src/interface/user';

export interface ICourse {
  name: string;
  price: string;
  count: string;
  video: string[];
  thumbnail?: string;
  profile?: {
    picture: string;
    firstname: string;
    lastname: string;
  };
}

interface ICourses {
  payload: ICourse[];
}

interface IUpdateUserProfileProp {
  userId: string;
  payload: {
    firstname: string;
    lastname: string;
    phone: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    address: string;
  };
}

interface IUpdateProfilePictureResponse {
  status: number;
  message: string;
  payload: {
    url: string;
  };
}

interface IUpdateProfilePictureProp {
  userId: string;
  data: FormData;
}

export const userSlice = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Profile', 'Course'],
  endpoints: (builder) => ({
    getUserProfile: builder.query<IUserData, void>({
      query: () => ({ url: '/auth/user/' }),
      providesTags: ['Profile'],
    }),
    updateUserProfile: builder.mutation<void, IUpdateUserProfileProp>({
      query: ({ userId, payload }) => ({
        url: `/users/${userId}/`,
        method: 'PUT',
        body: { ...payload },
      }),
      invalidatesTags: ['Profile'],
    }),
    updateProfilePicture: builder.mutation<
      IUpdateProfilePictureResponse,
      IUpdateProfilePictureProp
    >({
      query: ({ userId, data }) => ({
        url: `/users/${userId}/profile/`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Profile'],
    }),
    getAllCourses: builder.query<ICourses, void>({
      query: () => ({ url: '/courses/all/' }),
      providesTags: ['Course'],
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useUpdateProfilePictureMutation,
  useGetAllCoursesQuery,
} = userSlice;
