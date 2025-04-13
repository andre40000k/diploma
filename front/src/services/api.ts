import axios from "axios"

export const API_URL = "http://localhost:3001";

const $api = axios.create(
    {
        baseURL: API_URL,
        withCredentials: true
    }
);

export default $api;