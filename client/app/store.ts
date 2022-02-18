import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "../features/authReducer";

export const store = configureStore({
  reducer: {
    counter: authReducer,

    // This is where we add reducers.
    // Since we don't have any yet, leave this empty
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
