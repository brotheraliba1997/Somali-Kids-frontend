import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./api";

export const ProgramAPI = createApi({
  reducerPath: "programAPI",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["refetchProgram"],

  endpoints: (builder) => ({
    getProgram: builder.query({
      query: () => ({
        url: "/program",
        method: "GET",
      }),
      providesTags: ["refetchProgram"],
    }),


    createProgram: builder.mutation({
      query: (payload) => ({
        url: "/program",
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["refetchProgram"],
    }),


    getSingleProgram: builder.query({
      query: (id) => ({
        url: `/program/${id}`,
        method: "GET",
       
      }),
    }),

    updateProgram: builder.mutation({
      query: ({payload, id}) => ({
        url: `/program/${id}`,
        method: "PATCH",
        body: payload
      }),
      invalidatesTags: ["refetchProgram"],
    }),
  }),


});

export const {
  useCreateProgramMutation,
  useGetSingleProgramQuery,
  useGetProgramQuery,
  useUpdateProgramMutation
} = ProgramAPI;
