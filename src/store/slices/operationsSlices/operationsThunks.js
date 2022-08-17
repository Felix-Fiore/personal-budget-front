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

const createOperation = (amount, concept, date, type) => {
  return async (dispatch) => {
    try {
      const response = await instanceWithToken.post(
        '/operations',
        amount,
        concept,
        date,
        type
      );
      console.log(response);
      dispatch(
        operationsSlice.actions.createOperation({
          operation: response.data.operation,
        })
      );
    } catch (error) {
      console.log(error.response);
    }
  };
};

export { getOperations, createOperation };
