import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './createAccform.module.scss';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';
import { createUser } from '../../store/slices/userSlice/userThunks';

const CreateUserFormFields = {
  name: '',
  email: '',
  password: '',
};

export const CreateAccForm = () => {
  const { name, email, password, onInputChange } =
    useForm(CreateUserFormFields);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.user);

  //navigate('/');
  const handleCreateAcc = (e) => {
    e.preventDefault();
    console.log({ name, email, password });

    dispatch(createUser(name, email, password));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  return (
    <div className={styles.formContainer}>
      <form>
        <label>Nombre</label>
        <input
          type="text"
          className={styles.input}
          name="name"
          value={name}
          onChange={onInputChange}
        />

        <label>Email</label>
        <input
          type="email"
          className={styles.input}
          name="email"
          value={email}
          onChange={onInputChange}
        />

        <label>Contraseña</label>
        <input
          type="password"
          className={styles.input}
          name="password"
          value={password}
          onChange={onInputChange}
        />

        <button className={styles.btn} onClick={handleCreateAcc}>
          Crear Cuenta
        </button>
        <NavLink to={'/login'}>
          <p>Ya tenés una cuenta? Ingresá desde acá </p>
        </NavLink>
      </form>
    </div>
  );
};
