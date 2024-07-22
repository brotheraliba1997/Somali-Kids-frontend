import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./api";

export const categoryAPI = createApi({
  reducerPath: "categoryAPI",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["refetchCategories"],

  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
      providesTags: ["refetchCategories"],
    }),


    createCategory: builder.mutation({
      query: (payload) => ({
        url: "/category",
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["refetchCategories"],
    }),


    getSingleCategory: builder.query({
      query: (id) => ({
        url: `/category/${id}`,
        method: "GET",
       
      }),
    }),

    updateCategory: builder.mutation({
      query: ({payload, id}) => ({
        url: `/category/${id}`,
        method: "PATCH",
        body: payload
      }),
      invalidatesTags: ["refetchCategories"],
    }),
  }),


});

export const {
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useGetSingleCategoryQuery
} = categoryAPI;
