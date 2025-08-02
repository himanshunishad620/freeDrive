import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fileApi = createApi({
  reducerPath: "fileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://unlimited-cloud-storage.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "fe6acbab03mshdb6495c0eea0e81p1f538cjsn5786abddcaef",
      );
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
