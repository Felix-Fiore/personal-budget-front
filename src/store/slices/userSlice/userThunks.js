import { personalBudgetAPI } from '../../../api/personalBudgetAPI';
import { userSlice } from './userSlice';
import { toast } from 'react-hot-toast';

const userLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await personalBudgetAPI.post('/users', {
        email,
        password,
      });

      dispatch(
        userSlice.actions.setUser({
          name: response.data.name,
          token: response.data.token,
        })
      );
    } catch (error) {
      if (error.response.data.errors) {
        error.response.data.errors.map(({ msg }) => {
          toast.error(msg);
        });
      }
    }
  };
};

const createUser = (name, email, password) => {
  return async (dispatch) => {
    try {
      const response = await personalBudgetAPI.post('/users/new', {
        name,
        email,
        password,
      });

      dispatch(
        userSlice.actions.setUser({
          name: response.data.name,
          token: response.data.token,
        })
      );
    } catch (error) {
      if (error.response.data.errors) {
        error.response.data.errors.map(({ msg }) => {
          toast.error(msg);
        });
      }
    }
  };
};

export { userLogin, createUser };
