import styles from './panelList.module.scss';

export const PanelLists = () => {
    return (
        <div className={styles.panelListsContainer}>
            <div>
                <h3>Add a new operation</h3>
            </div>
            <div>
                <button className={styles.addButton}>+</button>
            </div>
            <div className={styles.panelListsTitle}>
                <h3>Your Operations history</h3>
            </div>
            <div className={styles.listsContainer}>
                <div className={styles.operationsListContainer}>
                    <div className={styles.operationsListTitle}>
                        <h3>Income Operations</h3>
                        <div className={styles.operationsList}>
                            <div className={styles.listContainer}>
                                <div>
                                    <div className={styles.operationsContainer}>
                                        <table
                                            className={styles.operationsTable}
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Amount</th>
                                                    <th>Date</th>
                                                    <th>Concept</th>
                                                    <th>Type</th>
                                                </tr>
                                                <tr>
                                                    <td>$100</td>
                                                    <td>2020-01-01</td>
                                                    <td>food</td>
                                                    <td>Income</td>
                                                </tr>
                                            </thead>
                                        </table>
                                        <div className={styles.optionsButtons}>
                                            <button
                                                className={styles.deleteButton}
                                            >
                                                del
                                            </button>
                                            <button
                                                className={styles.editButton}
                                            >
                                                edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.operationsListTitle}>
                        <h3>Outcome Operations</h3>

                        <div className={styles.operationsList}>
                            <div className={styles.listContainer}>
                                <div>
                                    <div className={styles.operationsContainer}>
                                        <table
                                            className={styles.operationsTable}
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Amount</th>
                                                    <th>Date</th>
                                                    <th>Concept</th>
                                                    <th>Type</th>
                                                </tr>
                                                <tr>
                                                    <td>$100</td>
                                                    <td>2020-01-01</td>
                                                    <td>food</td>
                                                    <td>Outcome</td>
                                                </tr>
                                            </thead>
                                        </table>
                                        <div className={styles.optionsButtons}>
                                            <button
                                                className={styles.deleteButton}
                                            >
                                                del
                                            </button>
                                            <button
                                                className={styles.editButton}
                                            >
                                                edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
