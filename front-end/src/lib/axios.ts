import axios, { AxiosError } from "axios";
import { env } from "../env";

export const api = axios.create({
  baseURL:env.VITE_API_URL
})


// api.interceptors.request.use(
//   config => {
//     config.headers['Authorization'] = `${localStorage.getItem('accessToken')}`;
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

api.interceptors.response.use((response) => {
  return response
}, (error) => {
  if(error instanceof AxiosError){
    return error.response
  }
  return error
})
