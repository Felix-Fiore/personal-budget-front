import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOperations } from '../../store/slices/operationsSlices/operationsThunks';
import styles from './lastOperations.module.scss';

const userOperations = (operations, uid) => {
  let userOperations = [];
  for (let i = operations.length - 1; i >= 0; i--) {
    if (operations[i].uid === uid) {
      userOperations.push(operations[i]);
    } else {
      console.log('No hay operaciones');
    }
  }
  return userOperations;
};

export const LastOperations = () => {
  const dispatch = useDispatch();

  const { operations } = useSelector((state) => state.operations);

  const { uid } = useSelector((state) => state.user);

  let filteredOperations = userOperations(operations, uid);

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
              {
                /* map function to represent all the operations  */
                filteredOperations.map((operation) => (
                  <tr key={operation.id}>
                    <td>{operation.amount}</td>
                    <td>{operation.date}</td>
                    <td>{operation.concept}</td>
                    <td>{operation.type}</td>
                  </tr>
                ))
              }
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
