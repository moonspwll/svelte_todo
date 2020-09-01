import axios from "axios";
import authHeader from "./auth.header";

const API_URL = `https://node-api.vercel.app/api/`;

export const getUsers = () => {
    return axios.get(API_URL + 'auth/users');
};