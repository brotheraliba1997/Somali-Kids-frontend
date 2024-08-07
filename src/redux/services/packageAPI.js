import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./api";

export const PackageAPI = createApi({
  reducerPath: "packageAPI",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["refetchPackages"],

  endpoints: (builder) => ({
    getPackages: builder.query({
      query: () => ({
        url: "/packages",
        method: "GET",
      }),
      providesTags: ["refetchPackages"],
    }),


    createPackages: builder.mutation({
      query: (payload) => ({
        url: "/packages",
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["refetchPackages"],
    }),


    getSinglePackages: builder.query({
      query: (id) => ({
        url: `/packages/${id}`,
        method: "GET",
       
      }),
    }),

    updatePackages: builder.mutation({
      query: ({payload, id}) => ({
        url: `/packages/${id}`,
        method: "PATCH",
        body: payload
      }),
      invalidatesTags: ["refetchPackages"],
    }),
  }),


});

export const {
  useCreatePackagesMutation,
  useGetSinglePackagesQuery,
  useGetPackagesQuery,
  useUpdatePackagesMutation
} = PackageAPI;
