import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./api";

export const SubcriptionAPI = createApi({
  reducerPath: "subcriptionAPI",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["refetchSubcription"],

  endpoints: (builder) => ({
    getSubcription: builder.query({
      query: () => ({
        url: "/subscription",
        method: "GET",
      }),
      providesTags: ["refetchSubcription"],
    }),


    createSubcription: builder.mutation({
      query: (payload) => ({
        url: "/auth/register",
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["refetchSubcription"],
    }),


    getSingleSubcription: builder.query({
      query: (id) => ({
        url: `/subscription/${id}`,
        method: "GET",
       
      }),
    }),

    updateSubcription: builder.mutation({
      query: ({payload, id}) => ({
        url: `/subscription/${id}`,
        method: "PATCH",
        body: payload
      }),
      invalidatesTags: ["refetchSubcription"],
    }),
  }),


});

export const {
  useCreateSubcriptionMutation,
  useGetSingleSubcriptionQuery,
  useGetSubcriptionQuery,
  useUpdateSubcriptionMutation
} = SubcriptionAPI;
