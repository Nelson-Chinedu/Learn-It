import { createSlice } from '@reduxjs/toolkit';

export interface AccountState {
  isLoggedIn: boolean;
  userId: string;
}

const clu = localStorage.getItem('clu') ? true : false; // check if custom logged user (clu) is set to true or false in localstorage

const initialState: AccountState = {
  isLoggedIn: clu,
  userId: '',
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
  },
});

export const { loggedState, getUserID } = accountSlice.actions;

export default accountSlice.reducer;
