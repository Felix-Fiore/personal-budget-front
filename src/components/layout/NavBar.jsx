import { useNavigate, NavLink } from 'react-router-dom';
import { userLogout } from '../../store/slices/userSlice/userThunks';
import { useDispatch, useSelector } from 'react-redux';
import styles from './navBar.module.scss';
import { useEffect } from 'react';

// Verifies if the user is logged in or not
function userLoggedIn(userLogged, navigate) {
  useEffect(() => {
    if (userLogged == undefined) {
      navigate('/Login');
    }
  }, [userLogged]);
}

export const NavBar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userName = useSelector((state) => state.user.name);

  const userLogged = localStorage.getItem('token');

  userLoggedIn(userLogged, navigate);

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/Login');
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
            <span>{userName.toUpperCase()}</span>
          </div>
        </li>
        <li>
          <button onClick={handleLogout}>
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
