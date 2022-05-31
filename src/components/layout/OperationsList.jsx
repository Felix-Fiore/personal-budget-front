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
                    <h3>Last Operations</h3>
                </div>
                <div className={styles.operationsContainer}>
                    <table className={styles.operationsTable}>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Type</th>
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
                        Go to Opeartions Panel
                        <span className="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
