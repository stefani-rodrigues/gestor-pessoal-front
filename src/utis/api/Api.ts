import axios from "axios";
import { store } from '../../redux/store';


const api = axios.create({
  baseURL: import.meta.env.VITE_URL_API
});

api.interceptors.request.use(
  (config) => {
    const authReducer = store.getState().auth;
    

    if (authReducer.isAutenticado && authReducer.token) {
      config.headers["Authorization"] = "Bearer " + authReducer.token.replace(/"/g, "");
    }
    return config;
  },
  (error) => {
  
   return Promise.reject(error);
  }
);

export default api;
