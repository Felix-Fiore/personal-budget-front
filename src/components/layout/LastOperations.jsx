import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOperations } from '../../store/slices/operationsSlices/operationsThunks';
import styles from './lastOperations.module.scss';

const userOperations = (operations, uid) => {
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].uid === uid) {
      let userOperations = operations[i];
      console.log(userOperations);
      return userOperations;
    } else {
      console.log('No hay operaciones');
    }
  }
};

export const LastOperations = () => {
  const dispatch = useDispatch();

  const { operations } = useSelector((state) => state.operations);

  const { uid } = useSelector((state) => state.user);

  userOperations(operations, uid);

  let navigate = useNavigate();

  const goToOperationsPanel = () => {
    navigate('/operations');
  };

  useEffect(() => {
    dispatch(getOperations());
  }, []);

  return (
    <div className={styles.listContainer}>
      <div>
        <div className={styles.containerTitle}>
          <h3>Últimas operaciones</h3>
        </div>
        <div className={styles.operationsContainer}>
          <table className={styles.operationsTable}>
            <thead>
              <tr>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Concepto</th>
                <th>Tipo</th>
              </tr>
              <tr>
                <td>$100</td>
                <td>2020-01-01</td>
                <td>food</td>
                <td>expense</td>
              </tr>
            </thead>
          </table>
        </div>
        <div>
          <button
            className={styles.goToOperation}
            onClick={goToOperationsPanel}
          >
            Ir al panel de operaciones
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
