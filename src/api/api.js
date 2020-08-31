import * as axios from "axios";

const instance = axios.create({
    withCredentials:true,
    headers: {
        "API-KEY":"e589b84d-1e31-4733-9476-64b9080e99f1"
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return axios.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                return response.data;
            });
    },
    unfollow (id) {
        return axios.delete(`/follow/${id}`).then(response => {
            return response.data;
            });
    },
    follow (id) {
        return axios.post(`/follow/${id}`).then(response => {
            return response.data;
            });
    },
    getProfile(userId) {
        return axios.get(`profile/${userId}`).then(response => {
            return response.data;
            });
    }
}

