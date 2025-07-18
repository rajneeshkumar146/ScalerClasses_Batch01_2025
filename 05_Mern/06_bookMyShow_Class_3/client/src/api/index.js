import axios from "axios";
const BASE_URL = "http://localhost:3000/"
const STORAGE_KEY = "token";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem(STORAGE_KEY)}`,
    }
});