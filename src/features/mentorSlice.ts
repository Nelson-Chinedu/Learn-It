import { createSlice } from '@reduxjs/toolkit';

export interface IMentors {
  unSubscribedMentors: [];
  subscribedMentors: [];
  isLoadingUnSubscribedMentors: boolean;
  isLoadingSubscribedMentors: boolean;
}

const initialState: IMentors = {
  unSubscribedMentors: [],
  subscribedMentors: [],
  isLoadingUnSubscribedMentors: true,
  isLoadingSubscribedMentors: true,
};

export const mentorSlice = createSlice({
  name: 'mentor',
  initialState,
  reducers: {
    getUnSubscribedMentors: (state, action) => {
      const { data, isLoading } = action.payload;
      if (isLoading && data === undefined) {
        state.isLoadingUnSubscribedMentors = true;
      } else {
        state.unSubscribedMentors = data;
        state.isLoadingUnSubscribedMentors = false;
      }
    },
    getSubscribedMentors: (state, action) => {
      const { data, loading } = action.payload;

      if (loading && data === undefined) {
        state.isLoadingSubscribedMentors = true;
      } else {
        state.subscribedMentors = data;
        state.isLoadingSubscribedMentors = false;
      }
    },
  },
});

export const { getSubscribedMentors, getUnSubscribedMentors } =
  mentorSlice.actions;

export default mentorSlice.reducer;
