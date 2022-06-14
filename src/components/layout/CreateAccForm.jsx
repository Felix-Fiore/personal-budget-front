import { NavLink, useNavigate } from 'react-router-dom';
import styles from './createAccform.module.scss';

export const CreateAccForm = () => {
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
                    Crear Cuenta
                </button>
                <NavLink to={'/login'}>
                    <p>Ya tenés una cuenta? Ingresá desde acá </p>
                </NavLink>
            </form>
        </div>
    );
};
