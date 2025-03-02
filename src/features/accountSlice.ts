import { createSlice } from '@reduxjs/toolkit';

export interface AccountState {
  isLoggedIn: boolean;
  userId: string;
  picture: string;
  isSubscribed: boolean;
}

const initialState: AccountState = {
  isLoggedIn: false,
  userId: '',
  picture: '',
  isSubscribed: false
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    loggedState: (state, action) => {
      state.isLoggedIn = action.payload.login;
      state.isSubscribed = action.payload.subscribed;
    },
    getUserID: (state, action) => {
      state.userId = action.payload;
    },
    getUserDetail: (state, action) => {
      state.picture = action.payload.picture;
    },
  },
});

export const { loggedState, getUserID, getUserDetail } = accountSlice.actions;

export default accountSlice.reducer;
