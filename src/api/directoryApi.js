// src/features/api/authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const directoryApi = createApi({
  reducerPath: "directoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
    credentials: "include", // your backend URL
  }),
  endpoints: (builder) => ({
    readDirectory: builder.query({
      query: (id) => `api/directory/readFolder/${id}`, // <-- route param
    }),
  }),
});

export const { useReadDirectoryQuery } = directoryApi;
