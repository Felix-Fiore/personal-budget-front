import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../store/slices/userSlice/userThunks';
import styles from './loginForm.module.scss';

const loginFormFields = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const { email, password, onInputChange } = useForm(loginFormFields);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });

    dispatch(userLogin(email, password));
  };

  const userLogged = localStorage.getItem('state');

  useEffect(() => {
    if (isLoggedIn || userLogged != undefined) {
      navigate('/');
    }
  }, [isLoggedIn]);

  return (
    <div className={styles.formContainer}>
      <form>
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

        <button className={styles.btn} onClick={handleLogin}>
          Ingresar
        </button>
        <NavLink to={'/newaccount'}>
          <p>No tenés una cuenta? Creala desde acá </p>
        </NavLink>
      </form>
    </div>
  );
};
