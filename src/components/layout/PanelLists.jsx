import styles from './panelList.module.scss';
import Modal from 'react-modal';
import { useState } from 'react';
import './modalStyle.css';
import { useDispatch } from 'react-redux';
import { createOperation } from '../../store/slices/operationsSlices/operationsThunks';
import { useForm } from '../../hooks/useForm';

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

const createOperationFormFields = {
  amount: '',
  concept: '',
  date: '',
  type: '',
};

export const PanelLists = () => {
  const dispatch = useDispatch();

  const { amount, concept, date, type, onInputChange } = useForm(
    createOperationFormFields
  );

  const handleCreateOperation = (e) => {
    e.preventDefault();
    console.log({ amount, concept, date, type });
    dispatch(createOperation({ amount, concept, date, type }));
    setIsOpen(false);
  };

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
                <input
                  placeholder="Monto"
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={onInputChange}
                />
              </label>
              <label>
                <span>Concepto</span>
                <select
                  name="concept"
                  value={concept}
                  onChange={onInputChange}
                  required
                >
                  <option value="" disabled hidden>
                    ¿Cuál es el concepto de la operación?
                  </option>
                  <option>Comida</option>
                  <option>Impuestos</option>
                  <option>Transporte</option>
                  <option>Entretenimiento</option>
                  <option>Otros</option>
                </select>
              </label>
              <label>
                <span>Fecha</span>
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={onInputChange}
                />
              </label>
              <label>
                <span>Tipo de Operación</span>
                <select
                  name="type"
                  value={type}
                  onChange={onInputChange}
                  required
                >
                  <option value="" disabled hidden>
                    ¿Qué tipo de operación es?
                  </option>
                  <option>Ingreso</option>
                  <option>Egreso</option>
                </select>
              </label>
            </form>
            <div className={styles.formButtons}>
              <button className={styles.exitButton} onClick={closeModal}>
                Salir
              </button>
              <button
                className={styles.saveButton}
                onClick={handleCreateOperation}
              >
                Guardar
              </button>
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
