import styles from './navBar.module.scss';

export const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Operations Panel</a>
                </li>
                <div className={styles.userTag}>
                    <span>User</span>
                </div>
            </ul>
        </div>
    );
};
