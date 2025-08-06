// src/features/api/authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import appConfig from "../constant/appConfig";

export const directoryApi = createApi({
  reducerPath: "directoryApi",
  tagTypes: ["folders"],
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.apiBaseUrl,
    // baseUrl: "http://localhost:4000/",
    credentials: "include", // your backend URL
  }),
  endpoints: (builder) => ({
    readDirectory: builder.query({
      query: (id) => `api/directory/readFolder/${id}`,
      providesTags: ["folders"], // <-- route param
    }),
    readDirectoryRecord: builder.query({
      query: () => `api/directory/readDirectoryRecord`,
      providesTags: ["records"], // <-- route param
    }),
    addFile: builder.mutation({
      query: (file) => ({
        url: "api/directory/addFile",
        method: "POST",
        body: file,
      }),
      invalidatesTags: ["folders", "records"],
    }),
    createFolder: builder.mutation({
      query: (folder) => ({
        url: "api/directory/createFolder",
        method: "POST",
        body: folder,
      }),
      invalidatesTags: ["folders", "records"],
    }),
    deleteFile: builder.mutation({
      query: (data) => ({
        url: "api/directory/removeFile",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["folders", "records"],
    }),
    deleteFolder: builder.mutation({
      query: (data) => ({
        url: "api/directory/removeFolder",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["folders", "records"],
    }),
    updateFolderName: builder.mutation({
      query: (data) => ({
        url: `api/directory/updateFolderName`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["folders"],
    }),
    updateFileName: builder.mutation({
      query: (data) => ({
        url: `api/directory/updateFileName`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["folders"],
    }),
  }),
});

export const {
  useReadDirectoryQuery,
  useCreateFolderMutation,
  useAddFileMutation,
  useDeleteFileMutation,
  useDeleteFolderMutation,
  useUpdateFolderNameMutation,
  useUpdateFileNameMutation,
  useReadDirectoryRecordQuery,
} = directoryApi;
