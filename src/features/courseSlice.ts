import { createSlice } from '@reduxjs/toolkit';

export interface ICourses {
  unEnrolledCourses: [];
  enrolledCourses: [];
  isLoadingUnEnrolledCourses: boolean;
  isLoadingEnrolledCourses: boolean;
}

const initialState: ICourses = {
  unEnrolledCourses: [],
  enrolledCourses: [],
  isLoadingUnEnrolledCourses: true,
  isLoadingEnrolledCourses: true,
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    getUnEnrolledCourses: (state, action) => {
      const { data, loading } = action.payload;
      if (loading && data === undefined) {
        state.isLoadingUnEnrolledCourses = true;
      } else {
        state.unEnrolledCourses = data;
        state.isLoadingUnEnrolledCourses = false;
      }
    },
    getEnrolledCourses: (state, action) => {
      const { data, loading } = action.payload;
      if (loading && data === undefined) {
        state.isLoadingEnrolledCourses = true;
      } else {
        state.enrolledCourses = data;
        state.isLoadingEnrolledCourses = false;
      }
    },
  },
});

export const { getEnrolledCourses, getUnEnrolledCourses } = courseSlice.actions;

export default courseSlice.reducer;
