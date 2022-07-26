import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import styles from './loginForm.module.scss';

const loginFormFields = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const { email, password, onInputChange } = useForm(loginFormFields);

  let navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

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

        <button className={styles.btn} onClick={handleLoginSubmit}>
          Ingresar
        </button>
        <NavLink to={'/newaccount'}>
          <p>No tenés una cuenta? Creala desde acá </p>
        </NavLink>
      </form>
    </div>
  );
};
