import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./api";

export const LanguageAPI = createApi({
  reducerPath: "languageAPI",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["refetchLanguage"],

  endpoints: (builder) => ({
    getlanguage: builder.query({
      query: () => ({
        url: "/language",
        method: "GET",
      }),
      providesTags: ["refetchLanguage"],
    }),


    createLanguage: builder.mutation({
      query: (payload) => ({
        url: "/language",
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["refetchLanguage"],
    }),


    getSingleLanguage: builder.query({
      query: (id) => ({
        url: `/language/${id}`,
        method: "GET",
       
      }),
    }),

    updateLanguage: builder.mutation({
      query: ({payload, id}) => ({
        url: `/language/${id}`,
        method: "PATCH",
        body: payload
      }),
      invalidatesTags: ["refetchLanguage"],
    }),
  }),


});

export const {
  useCreateLanguageMutation,
  useGetSingleLanguageQuery,
  useGetlanguageQuery,
  useUpdateLanguageMutation
} = LanguageAPI;
