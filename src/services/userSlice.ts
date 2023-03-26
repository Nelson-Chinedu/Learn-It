import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  BaseQueryFn,
  FetchArgs,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

import { IUserData } from 'src/interface/user';

const mutex = new Mutex();

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

export const userSlice = createApi({
  reducerPath: 'user',
  baseQuery: customFetchBase,
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
