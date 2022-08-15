import axios from 'axios';

export const instanceWithToken = axios.create({
  baseURL: 'https://personal-budget-back.herokuapp.com/api',
  headers: {
    Accepted: 'appication/json',
    'Content-Type': 'application/json',
  },
});

instanceWithToken.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
