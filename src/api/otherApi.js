import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import appConfig from "../constant/appConfig";

export const otherApi = createApi({
  reducerPath: "otherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.apiBaseUrl,
  }),
  endpoints: (builder) => ({
    contactUs: builder.mutation({
      query: (data) => ({
        url: "api/other/contactUs",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useContactUsMutation } = otherApi;
