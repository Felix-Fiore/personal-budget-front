import axios from 'axios';

export const personalBudgetAPI = axios.create({
  baseURL: 'https://personal-budget-back.herokuapp.com/api',
});
