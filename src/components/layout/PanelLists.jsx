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
        <h3>Agregar una nueva operación</h3>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          className="modal"
          overlayClassName="modalBackground"
        >
          <div className={styles.formTitle}>
            <h2>Completá el siguiente formulario</h2>
          </div>
          <div className={styles.formContainer}>
            <form>
              <label>
                <span>Monto</span>
                <input type="number" />
              </label>
              <label>
                <span>Concepto</span>
                <select>
                  <option value="">Comida</option>
                  <option value="">Impuestos</option>
                  <option value="">Transporte</option>
                  <option value="">Entretenimiento</option>
                  <option value="">Otros</option>
                </select>
              </label>
              <label>
                <span>Fecha</span>
                <input type="date" />
              </label>
              <label>
                <span>Tipo de Operación</span>
                <select>
                  <option value="">Ingreso</option>
                  <option value="">Egreso</option>
                </select>
              </label>
            </form>
            <div className={styles.formButtons}>
              <button className={styles.exitButton} onClick={closeModal}>
                Salir
              </button>
              <button className={styles.saveButton}>Guardar</button>
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
        <h3>Historial de operaciones</h3>
      </div>
      <div className={styles.listsContainer}>
        <div className={styles.operationsListContainer}>
          <div className={styles.operationsListTitle}>
            <h3>Ingresos</h3>
            <div className={styles.operationsList}>
              <div className={styles.listContainer}>
                <div>
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
                          <td>Income</td>
                        </tr>
                      </thead>
                    </table>
                    <div className={styles.optionsButtons}>
                      <button className={styles.deleteButton}>
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                      <button className={styles.editButton}>
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.operationsListTitle}>
            <h3>Egresos</h3>

            <div className={styles.operationsList}>
              <div className={styles.listContainer}>
                <div>
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
                          <td>Outcome</td>
                        </tr>
                      </thead>
                    </table>
                    <div className={styles.optionsButtons}>
                      <button className={styles.deleteButton}>
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                      <button className={styles.editButton}>
                        <span className="material-symbols-outlined">edit</span>
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
