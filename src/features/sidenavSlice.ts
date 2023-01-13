import { createSlice } from '@reduxjs/toolkit';

export interface SidenavState {
  isCollapsedSidenav: boolean;
}

const initialState: SidenavState = {
  isCollapsedSidenav: false,
};

export const sidenavSlice = createSlice({
  name: 'sidenav',
  initialState,
  reducers: {
    handleSidenav: (state, action) => {
      state.isCollapsedSidenav = action.payload;
    },
  },
});

export const { handleSidenav } = sidenavSlice.actions;

export default sidenavSlice.reducer;
