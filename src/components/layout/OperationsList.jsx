import styles from './operationsList.module.scss';

export const OperationsList = () => {
    return (
        <div className={styles.listContainer}>
            <div>
                <div className={styles.containerTitle}>
                    <h3>Last Operations</h3>
                </div>
                <div className={styles.operationsContainer}>
                    <div className={styles.operation}>
                        <div className={styles.amount}>
                            <p>amount</p>
                        </div>
                        <div className={styles.category}>
                            <p>category</p>
                        </div>
                        <div className={styles.description}>
                            <p>description</p>
                        </div>
                        <div className={styles.date}>
                            <p>date</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className={styles.addOperation}>
                        Go to Opeartions Panel
                    </button>
                </div>
            </div>
        </div>
    );
};
