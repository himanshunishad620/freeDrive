// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./../api/authApi";
import { directoryApi } from "../api/directoryApi";
import { fileApi } from "../api/fileApi";
import { otherApi } from "../api/otherApi";
// import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    //     auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [directoryApi.reducerPath]: directoryApi.reducer,
    [fileApi.reducerPath]: fileApi.reducer,
    [otherApi.reducerPath]: otherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      directoryApi.middleware,
      fileApi.middleware,
      otherApi.middleware,
    ),
});
