import axios, { AxiosError } from "axios";
import { env } from "../env";

export const api = axios.create({
  baseURL:env.VITE_API_URL
})
// const userLocalStorage = localStorage.getItem('accessToken') ?? ""
// api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(userLocalStorage)}`

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken')

    if (token) {
      config.headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
        return config;
    }

    return config

    },
    error => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use((response) => {
  return response
}, (error) => {
  if(error instanceof AxiosError){
    return error.response
  }
  return error
})
