import { useNavigate } from 'react-router-dom';
import styles from './operationsList.module.scss';

export const OperationsList = () => {
    let navigate = useNavigate();

    const goToOperationsPanel = () => {
        navigate('/operations');
    };

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
                        <span className="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
