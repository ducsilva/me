import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "@States/user/userSlice";

const rootAppReducer = combineReducers({
  user: userSlice,
});

const rootReducer = (state: any, action: AnyAction) => {
  return rootAppReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: true }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
