import { personalBudgetAPI } from '../../../api/personalBudgetAPI';
import { userSlice } from './userSlice';
import { toast } from 'react-hot-toast';

// Create a function to save the store state to localStorage
const saveState = (response) => {
  try {
    const serializedState = JSON.stringify(response);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
};

// Create a function to delete the store state from localStorage
const deleteState = () => {
  try {
    localStorage.removeItem('state');
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

      dispatch(
        userSlice.actions.setUser({
          name: response.data.name,
          token: response.data.token,
        })
      );
      saveState(response.data);
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
      saveState(response.data);
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
    dispatch(userSlice.actions.logout());
    deleteState();
  };
};

export { userLogin, createUser, userLogout };
