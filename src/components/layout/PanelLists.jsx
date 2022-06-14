import styles from './panelList.module.scss';
import Modal from 'react-modal';
import { useState } from 'react';
import './modalStyle.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

export const PanelLists = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.panelListsContainer}>
            <div>
                <h3>Add a new operation</h3>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    className="modal"
                    overlayClassName="modalBackground"
                >
                    <div className={styles.formTitle}>
                        <h2>Complete the following form</h2>
                    </div>
                    <div className={styles.formContainer}>
                        <form>
                            <label>
                                <span>Amount</span>
                                <input type="number" />
                            </label>
                            <label>
                                <span>Concept</span>
                                <select>
                                    <option value="">Food</option>
                                    <option value="">Taxes</option>
                                    <option value="">Transport</option>
                                    <option value="">Other</option>
                                </select>
                            </label>
                            <label>
                                <span>Date</span>
                                <input type="date" />
                            </label>
                            <label>
                                <span>Operation type</span>
                                <select>
                                    <option value="">Income</option>
                                    <option value="">Outcome</option>
                                </select>
                            </label>
                        </form>
                        <div className={styles.formButtons}>
                            <button
                                className={styles.exitButton}
                                onClick={closeModal}
                            >
                                Exit
                            </button>
                            <button className={styles.saveButton}>Save</button>
                        </div>
                    </div>
                </Modal>
            </div>
            <div>
                <button className={styles.addButton} onClick={openModal}>
                    <span className="material-symbols-outlined">add</span>
                </button>
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
                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                            </button>
                                            <button
                                                className={styles.editButton}
                                            >
                                                <span className="material-symbols-outlined">
                                                    edit
                                                </span>
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
                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                            </button>
                                            <button
                                                className={styles.editButton}
                                            >
                                                <span className="material-symbols-outlined">
                                                    edit
                                                </span>
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
