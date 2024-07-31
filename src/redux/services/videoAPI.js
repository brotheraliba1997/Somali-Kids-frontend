import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./api";

export const VideoUploadAPI = createApi({
  reducerPath: "videoUploadAPI",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["refetchVideoUpload"],

  endpoints: (builder) => ({
    getVideo: builder.query({
      query: () => ({
        url: "/video",
        method: "GET",
      }),
      providesTags: ["refetchVideoUpload"],
    }),


    createVideo: builder.mutation({
      query: (payload) => ({
        url: "/video",
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["refetchVideoUpload"],
    }),


    getSingleVideo: builder.query({
      query: (id) => ({
        url: `/video/${id}`,
        method: "GET",
       
      }),
    }),

    

    updateVideo: builder.mutation({
      query: ({payload, id}) => ({
        url: `/video/${id}`,
        method: "PATCH",
        body: payload
      }),
      invalidatesTags: ["refetchVideoUpload"],
    }),
  }),


});

export const {
  useCreateVideoMutation,
  useGetSingleVideoQuery,
  useGetVideoQuery,
  useUpdateVideoMutation
} = VideoUploadAPI;
