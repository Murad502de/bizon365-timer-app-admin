import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.headers['Content-Type'] = "application/json";

const { API_BASE_URL } = useRuntimeConfig();

// console.debug('api/index/NUXT_APP_API_URL', API_BASE_URL); //DELETE

const api = axios.create({
  baseURL: API_BASE_URL || ''
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');

    // console.debug('setToken[API]', token,); //DELETE

    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }

    config.maxContentLength = 500000000;
    config.maxBodyLength = 5000000000;

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export {
  api,
};