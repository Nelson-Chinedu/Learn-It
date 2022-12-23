import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { authSlice } from 'src/modules/Auth/services/authSlice';
import { teacherSlice } from 'src/modules/Teacher/services/teacherSlice';
import { studentSlice } from 'src/modules/Student/services/studentSlice';

import { userSlice } from 'src/services/userSlice';

export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [teacherSlice.reducerPath]: teacherSlice.reducer,
    [studentSlice.reducerPath]: studentSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(authSlice.middleware)
      .concat(userSlice.middleware)
      .concat(studentSlice.middleware)
      .concat(teacherSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
