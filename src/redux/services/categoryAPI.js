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


    getSingleCategory: builder.query({
      query: (id) => ({
        url: `/category/${id}`,
        method: "GET",
       
      }),
    }),

    uploadCategory: builder.mutation({
      query: ({payload, id}) => ({
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
  useGetSingleCategoryQuery
} = categoryAPI;
