// src/features/api/authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const directoryApi = createApi({
  reducerPath: "directoryApi",
  tagTypes: ["folders"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://resumakebackend.onrender.com/",
    credentials: "include", // your backend URL
  }),
  endpoints: (builder) => ({
    readDirectory: builder.query({
      query: (id) => `api/directory/readFolder/${id}`,
      providesTags: ["folders"], // <-- route param
    }),
    addFile: builder.mutation({
      query: (file) => ({
        url: "api/directory/addFile",
        method: "POST",
        body: file,
      }),
      invalidatesTags: ["folders"],
    }),
    createFolder: builder.mutation({
      query: (folder) => ({
        url: "api/directory/createFolder",
        method: "POST",
        body: folder,
      }),
      invalidatesTags: ["folders"],
    }),
  }),
});

export const {
  useReadDirectoryQuery,
  useCreateFolderMutation,
  useAddFileMutation,
} = directoryApi;
