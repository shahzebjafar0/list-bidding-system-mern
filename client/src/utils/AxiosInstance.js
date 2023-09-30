import axios from 'axios';
import { getCurrentUser } from './helper';

const BASE_URL = import.meta.env.VITE_SERVER_URL;
console.log(import.meta.env)
const token = getCurrentUser();

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: token
  }
});
const API = {
    GET: async (url, config) => {
      try {
        const result = await axiosInstance.get(url, config);
        return result;
      } catch (error) {
        return error;
      }
    },
  
    POST: async (url, data, config) => {
      try {
        const result = await axiosInstance.post(url, data, config);
        return result;
      } catch (error) {
        return error;
      }
    },
  
    PUT: async (url, data, config) => {
      try {
        const result = await axiosInstance.put(url, data, config);
        return result;
      } catch (error) {
        return error;
      }
    },
  
    PATCH: async (url, data, config) => {
      try {
        const result = await axiosInstance.patch(url, data, config);
        return result;
      } catch (error) {
        return error;
      }
    },
  
    DELETE: async (url, config) => {
      try {
        const result = await axiosInstance.delete(url, config);
        return result;
      } catch (error) {
        return error;
      }
    },
  };

export default API;
