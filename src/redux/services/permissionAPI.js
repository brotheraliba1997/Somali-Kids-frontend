import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./api";

export const PermissionAPI = createApi({
  reducerPath: "permissionAPI",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["refetchPermission"],

  endpoints: (builder) => ({
    getPermission: builder.query({
      query: () => ({
        url: "/permission",
        method: "GET",
      }),
      providesTags: ["refetchPermission"],
    }),


    createPermission: builder.mutation({
      query: (payload) => ({
        url: "/permission",
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["refetchPermission"],
    }),


    getSinglePermission: builder.query({
      query: (id) => ({
        url: `/permission/${id}`,
        method: "GET",
       
      }),
    }),

    updatePermission: builder.mutation({
      query: ({payload, id}) => ({
        url: `/permission/${id}`,
        method: "PATCH",
        body: payload
      }),
      invalidatesTags: ["refetchPermission"],
    }),
  }),


});

export const {
  useCreatePermissionMutation,
  useGetSinglePermissionQuery,
  useGetPermissionQuery,
  useUpdatePermissionMutation
} = PermissionAPI;
