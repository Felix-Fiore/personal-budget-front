import { useNavigate, NavLink } from 'react-router-dom';
import { userLogout } from '../../store/slices/userSlice/userThunks';
import { useDispatch, useSelector } from 'react-redux';
import styles from './navBar.module.scss';

export const NavBar = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    dispatch(userLogout());
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
            <span className="material-symbols-outlined">view_timeline</span>
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
            <span className="material-symbols-outlined" onClick={handleLogout}>
              logout
            </span>{' '}
            Salir
          </button>
        </li>
      </ul>
    </div>
  );
};
