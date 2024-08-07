import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./api";

export const ContactAPI = createApi({
  reducerPath: "contactAPI",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["refetchContact"],

  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => ({
        url: "/contact",
        method: "GET",
      }),
      providesTags: ["refetchContact"],
    }),


    createContact: builder.mutation({
      query: (payload) => ({
        url: "/contact",
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["refetchContact"],
    }),


    getSingleContact: builder.query({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "GET",
       
      }),
    }),

    updateContact: builder.mutation({
      query: ({payload, id}) => ({
        url: `/contact/${id}`,
        method: "PATCH",
        body: payload
      }),
      invalidatesTags: ["refetchContact"],
    }),
  }),


});

export const {
  useCreateContactMutation,
  useGetSingleContactQuery,
  useGetContactQuery,
  useUpdateContactMutation
} = ContactAPI;
