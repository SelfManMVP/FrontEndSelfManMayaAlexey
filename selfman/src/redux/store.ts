import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import lightDarkModeReducer from './lightDarkMode/lightDarkModeSlice';
import sideBarModeReducer from './sideBarMode/sideBarModeSlice';
import createUserDataSlice from './createUser/createUserDataSlice';
import createUserDataAnswerSlice from './createUser/createUserDataAnswerSlice';

export const store = configureStore({
  reducer: {
    lightDarkMode: lightDarkModeReducer,
    sideBarMode: sideBarModeReducer,
    createUserData: createUserDataSlice,
    createUserDataAnswer: createUserDataAnswerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
