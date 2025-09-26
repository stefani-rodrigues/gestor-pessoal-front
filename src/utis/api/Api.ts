import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("error Request: ", error);
    Promise.reject(error);
  }
);

export default api;
