import { createSlice } from '@reduxjs/toolkit';

export interface ICourses {
  courses: [];
  isLoading: boolean;
}

const initialState: ICourses = {
  courses: [],
  isLoading: true,
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    getUnEnrolledCourses: (state, action) => {
      const { data, loading } = action.payload;
      if (loading && data === undefined) {
        state.isLoading = true;
      } else {
        state.courses = data;
        state.isLoading = false;
      }
    },
    getEnrolledCourses: (state, action) => {
      // eslint-disable-next-line no-console
      console.log(state, '<>', action);
    },
  },
});

export const { getEnrolledCourses, getUnEnrolledCourses } = courseSlice.actions;

export default courseSlice.reducer;
