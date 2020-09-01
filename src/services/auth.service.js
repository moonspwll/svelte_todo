import axios from "axios";

const API_URL = `https://node-api.vercel.app/api/`;

export const login = (email, password) => {
    return axios
        .post(API_URL + "auth/login", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

export const register = (email, password) => {
    return axios
        .post(API_URL + "auth/register", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};