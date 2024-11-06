import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaceQuery } from "../../config/create-bace-query";

export const userApi = createApi({
  reducerPath: "user_ma",
  baseQuery: createBaceQuery(),
  tagTypes: ["kimdir"],
  endpoints: (build) => ({
    getUsers: build.query({
      query: (page = 1) => {
        return {
          url: "/todos",
          params: {
            _limit: 4,
            _page: page,
          },
        };
      },
      transformResponse: (data, res) => {
        let countData = res?.response.headers.get("X-Total-count");
        if (countData % 4 != 0) {
          return { data, pageSize: Math.round((Number(countData) + 1) / 4) };
        }
        return { data, pageSize: Math.round(Number(countData) / 4) };
      },
      providesTags: ["kimdir"],
    }),
    createUser: build.mutation({
      query: (data) => ({
        url: "/todos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["kimdir"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["kimdir"],
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation, useDeleteUserMutation } = userApi;
