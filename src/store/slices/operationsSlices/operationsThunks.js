import { instanceWithToken } from '../../../api/instanceWithToken';
import { operationsSlice } from './operationsSlice';

const getOperations = () => {
  console.log(window.localStorage.getItem('token'));
  return async (dispatch) => {
    try {
      dispatch(operationsSlice.actions.loadingOperations());
      const response = await instanceWithToken.get('/operations');
      console.log(response);
      dispatch(
        operationsSlice.actions.getOperationsSuccess({
          operations: response.data.operationsResult,
        })
      );
    } catch (error) {
      console.log(error.response);
    }
  };
};

export { getOperations };
