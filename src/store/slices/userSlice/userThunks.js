import { personalBudgetAPI } from '../../../api/personalBudgetAPI';
import { userSlice } from './userSlice';
import { toast } from 'react-hot-toast';

const saveLocalStorage = (key, response) => {
  try {
    const serializedState = response;
    window.localStorage.setItem(key, serializedState);
  } catch (err) {
    console.log(err);
  }
};

const deleteLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (err) {
    console.log(err);
  }
};

const userLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await personalBudgetAPI.post('/users', {
        email,
        password,
      });
      /* console.log(response); */
      dispatch(
        userSlice.actions.setUser({
          name: response.data.name,
          token: response.data.token,
          uid: response.data.uid,
        })
      );
      saveLocalStorage('name', response.data.name);
      saveLocalStorage('token', response.data.token);
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
          uid: response.data.uid,
        })
      );
      saveLocalStorage('name', response.data.name);
      saveLocalStorage('token', response.data.token);
    } catch (error) {
      if (error.response.data.errors) {
        error.response.data.errors.map(({ msg }) => {
          toast.error(msg);
        });
      }
    }
  };
};

const userLogout = () => {
  return async (dispatch) => {
    deleteLocalStorage();
    dispatch(userSlice.actions.logout());
  };
};

export { userLogin, createUser, userLogout };
