import { personalBudgetAPI } from '../../../api/personalBudgetAPI';
import { userSlice } from './userSlice';

export const userLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await personalBudgetAPI.post('/users', {
        email,
        password,
      });
      // check if response is ok

      console.log(response.message);

      dispatch(
        userSlice.actions.setUser({
          name: response.data.name,
          token: response.data.token,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
