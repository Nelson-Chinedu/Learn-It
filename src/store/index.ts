import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from 'src/features/auth/authSlice';
import { userSlice } from 'src/features/user/userSlice';

export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
