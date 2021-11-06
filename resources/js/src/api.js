// const axios = window.axios;
import axios from "axios";

export const axiosApi = axios.create({
    withCredentials: true, // required to handle the CSRF token
});

const BASE_API_URL = "/api";

export default {
    getAllPosts: () => axios.get(`${BASE_API_URL}/posts`),
    onePost: (id) => axios.get(`${BASE_API_URL}/posts/${id}/edit`),
    addPost: (data) => axios.post(`${BASE_API_URL}/posts`, data),
    updatePost: (post, id) => axios.put(`${BASE_API_URL}/posts/${id}`, post),
    deletePost: (id) => axios.delete(`${BASE_API_URL}/posts/${id}`),
    getAllTopics: () => axios.get(`${BASE_API_URL}/topics`),
    followTopic: (topicName) =>
        axios.post(`http://localhost/topic/${topicName}/follow`, topicName),
    login: (data) => axiosApi.post(`http://localhost/login`, data),
    signup: (data) => axios.post(`http://localhost/register`, data),
};
