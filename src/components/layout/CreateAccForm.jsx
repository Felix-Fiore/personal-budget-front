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

                <label>Password</label>
                <input type="password" className={styles.input} />

                <button className={styles.btn} onClick={navigateToHome}>
                    Create Account
                </button>
                <NavLink to={'/login'}>
                    <p>Do you have an account already? Go to login </p>
                </NavLink>
            </form>
        </div>
    );
};
