import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./api";

export const NotificationAPI = createApi({
  reducerPath: "notificationAPI",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["refetchNotification"],

  endpoints: (builder) => ({
    getNotification: builder.query({
      query: () => ({
        url: "/notification",
        method: "GET",
      }),
      providesTags: ["refetchNotification"],
    }),



    updateNotification: builder.mutation({
      query: ({payload, id}) => ({
        url: `/notification/${id}`,
        method: "PATCH",
        body: payload
      }),
      invalidatesTags: ["refetchNotification"],
    }),
  }),


});

export const {
  useGetNotificationQuery,
  useUpdateNotificationMutation
} = NotificationAPI;
