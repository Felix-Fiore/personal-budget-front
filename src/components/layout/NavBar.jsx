import { useNavigate, NavLink } from 'react-router-dom';
import styles from './navBar.module.scss';

export const NavBar = () => {
    let navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div className={styles.navBar}>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? styles.active : '';
                        }}
                        to="/"
                    >
                        <span className="material-symbols-outlined">home</span>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? styles.active : '';
                        }}
                        to="/operations"
                    >
                        <span className="material-symbols-outlined">
                            view_timeline
                        </span>
                        Operaciones
                    </NavLink>
                </li>
            </ul>
            <ul className={styles.rightSide}>
                <li>
                    <div className={styles.userTag}>
                        <span>Felix</span>
                    </div>
                </li>
                <li>
                    <button onClick={navigateToLogin}>
                        {' '}
                        <span className="material-symbols-outlined">
                            logout
                        </span>{' '}
                        Salir
                    </button>
                </li>
            </ul>
        </div>
    );
};
