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
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        if (
          currentCache.page !== newItems.page
        )
          currentCache.data.push(...newItems.data);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),



    updateNotification: builder.mutation({
      query: (id) => ({
        url: `/notification/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["refetchNotification"],
    }),
  }),
});

export const {
  useGetNotificationQuery,
  useUpdateNotificationMutation
} = NotificationAPI;
