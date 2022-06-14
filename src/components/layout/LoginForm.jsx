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

                <label>Password</label>
                <input type="password" className={styles.input} />

                <button className={styles.btn} onClick={navigateToHome}>
                    Log in
                </button>
                <NavLink to={'/newaccount'}>
                    <p>Do not have an account? Create a new one </p>
                </NavLink>
            </form>
        </div>
    );
};
