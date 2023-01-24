import { createSlice } from '@reduxjs/toolkit';

export interface AccountState {
  isLoggedIn: boolean;
  userId: string;
  picture: string;
}

const clu = localStorage.getItem('clu') ? true : false; // check if custom logged user (clu) is set to true or false in localstorage

const initialState: AccountState = {
  isLoggedIn: clu,
  userId: '',
  picture: '',
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    loggedState: (state, action) => {
      state.isLoggedIn = action.payload;
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
