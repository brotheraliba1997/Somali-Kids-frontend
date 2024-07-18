import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./api";

export const categoryAPI = createApi({
  reducerPath: "categoryAPI",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["refetchTransactions"],

  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
    }),


    createCategory: builder.mutation({
      query: (payload) => ({
        url: "/category",
        method: "POST",
        body: payload
      }),
    }),


    uploadCategory: builder.mutation({
      query: ({id ,payload}) => ({
        url: `/category/${id}`,
        method: "PATCH",
        body: payload
      }),
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useUploadCategoryMutation,
} = categoryAPI;
