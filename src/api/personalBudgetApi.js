import axios from 'axios';

export const personalBudgetAPI = axios.create({
  baseURL: 'https://personal-budget-back.herokuapp.com/api',
});

export const instanceWithToken = axios.create({
  baseURL: 'https://personal-budget-back.herokuapp.com/api',
  headers: {
    'x-token': localStorage.getItem('token'),
  },
});
