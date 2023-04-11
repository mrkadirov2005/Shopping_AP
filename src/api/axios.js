import axios from "axios";
import store from "../store";

export const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use(
  (config) => {
    const token = store.getState().userReducer.token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {}
);
