import { NavLink, useNavigate } from 'react-router-dom';
import styles from './loginForm.module.scss';

export const LoginForm = () => {
  let navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.formContainer}>
      <form>
        <label>Email</label>
        <input type="email" className={styles.input} />

        <label>Contraseña</label>
        <input type="password" className={styles.input} />

        <button className={styles.btn} onClick={navigateToHome}>
          Ingresar
        </button>
        <NavLink to={'/newaccount'}>
          <p>No tenés una cuenta? Creala desde acá </p>
        </NavLink>
      </form>
    </div>
  );
};
