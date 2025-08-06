import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import appConfig from "../constant/appConfig";

export const fileApi = createApi({
  reducerPath: "fileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.rapidApiBaseUrl,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", appConfig.rapidApiKey);
      headers.set("x-rapidapi-host", "unlimited-cloud-storage.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchFileUrl: builder.query({
      query: (fileId) => ({
        url: `/rapidapi/telegram/download.php`,
        method: "GET",
        params: { fileId }, // same as options.params
      }),
    }),
  }),
});

export const { useFetchFileUrlQuery } = fileApi;
