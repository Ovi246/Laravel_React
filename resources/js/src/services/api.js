import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const baseUrl = "http://localhost/";

const axiosBaseQuery =
    ({ baseUrl } = { baseUrl: "" }) =>
    async ({ url, method, data }) => {
        try {
            const result = await axios({ url: baseUrl + url, method, data });
            return { data: result.data };
        } catch (axiosError) {
            let err = axiosError;
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data,
                },
            };
        }
    };

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: axiosBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (user) => {
                console.log("user", user);
                return {
                    url: "login",
                    method: "POST",
                    data: user,
                };
            },
        }),
        register: builder.mutation({
            query(user) {
                return {
                    url: "register",
                    method: "POST",
                    data: user,
                };
            },
        }),
    }),
});

export const myApi = createApi({
    reducerPath: "myApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ["POSTS", "TOPICS", "FOLLOWER"],
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "dashboard",
            providesTags: ["POSTS"],
        }),
        getPost: builder.query({
            query: (id) => `api/posts/${id}`,
        }),
        addPost: builder.mutation({
            query: (body) => ({
                url: `api/posts`,
                method: "POST",
                body,
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                invalidatesTags: ["POSTS"],
            }),
        }),
        deletePost: builder.mutation({
            query(id) {
                return {
                    url: `api/posts/${id}`,
                    method: "DELETE",
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                            "content"
                        ),
                    },
                    invalidatesTags: ["POSTS"],
                };
            },
        }),
        getTopics: builder.query({
            query: () => "api/topics",
            providesTags: ["TOPICS"],
        }),
        getTopicsFollower: builder.query({
            query: () => "user/topic_followings",
            providesTags: ["FOLLOWER"],
        }),
        followTopic: builder.mutation({
            query: (name) => {
                return {
                    url: `/topic/${name}/follow`,
                    method: "POST",
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                            "content"
                        ),
                    },
                    invalidatesTags: ["POSTS"],
                };
            },
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddPostMutation,
    useDeletePostMutation,
    useGetTopicsQuery,
    useFollowTopicMutation,
    useGetTopicsFollowerQuery,
} = myApi;

export const { useLoginMutation, useRegisterMutation } = authApi;
