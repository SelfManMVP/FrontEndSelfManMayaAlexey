import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import lightDarkModeReducer from './lightDarkMode/lightDarkModeSlice';
import sideBarModeReducer from './sideBarMode/sideBarModeSlice';

export const store = configureStore({
  reducer: {
    lightDarkMode: lightDarkModeReducer,
    sideBarMode: sideBarModeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
