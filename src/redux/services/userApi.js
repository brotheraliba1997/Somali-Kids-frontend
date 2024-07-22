import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./api";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: baseQueryWithAuth, // Set default base query to the one with auth headers
  tagTypes: ["refetchUser"],
  endpoints: (builder) => ({
    // Client Queries
    getUsers: builder.query({
      query: ({ page = 1, pageSize = 10, sort = "asc" }) => ({
        url: "/users",
        method: "GET",
        // params: { page, pageSize, sort },
      }),
      providesTags: ["refetchUser"],
    }),

    createUser: builder.mutation({
      query: (payload) => ({
        url: "/users",
        method: "POST",
        body: { ...payload,  },
      }),
      invalidatesTags: ["refetchUser"],
    }),

    updateUsers: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: { ...payload,  },
      }),
      invalidatesTags: ["refetchUser"],
    }),

    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),

    checkUserAuth: builder.mutation({
      query: () => ({
        url: `/users/checkAuth`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUsersMutation,
  useGetUserByIdQuery,
  useCheckUserAuthMutation
} = userAPI;
