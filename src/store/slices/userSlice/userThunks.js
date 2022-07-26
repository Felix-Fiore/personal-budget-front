import { personalBudgetAPI } from '../../../api/personalBudgetAPI';

export const userThunks = () => {
  return async (dispatch) => {
    const response = await personalBudgetAPI.post('/users', {
      email: 'jhon@correo.com',
      password: '123456',
    });
    console.log(response);
    dispatch(
      setUser({
        name: response.data.name,
        email: response.data.email,
        token: response.data.token,
      })
    );
  };
};
