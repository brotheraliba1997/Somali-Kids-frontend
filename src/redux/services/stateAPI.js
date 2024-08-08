import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./api";

export const StateAPI = createApi({
  reducerPath: "stateAPI",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["refetchstate"],

  endpoints: (builder) => ({
    getSatate: builder.query({
      query: () => ({
        url: "/visit",
        method: "GET",
      }),
      providesTags: ["refetchstate"],
    }),


    createState: builder.query({
      query: () => ({
        url: "/visit/create",
        method: "GET",
        
      }),
      invalidatesTags: ["refetchstate"],
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
      invalidatesTags: ["refetchstate"],
    }),
  }),


});

export const {
  useCreateStateQuery,
  useGetSingleProgramQuery,
  useGetSatateQuery,
  useUpdateProgramMutation
} = StateAPI;
