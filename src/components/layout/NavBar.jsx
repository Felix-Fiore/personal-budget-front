import styles from './navBar.module.scss';

export const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <ul>
                <li>
                    <span className="material-symbols-outlined">home</span>
                    <a>Home</a>
                </li>
                <li>
                    <span className="material-symbols-outlined">
                        view_timeline
                    </span>
                    <a>Operations Panel</a>
                </li>
            </ul>
            <ul className={styles.rightSide}>
                <li>
                    <div className={styles.userTag}>
                        <span>Felix</span>
                    </div>
                </li>
                <li>
                    <button>
                        {' '}
                        <span className="material-symbols-outlined">
                            logout
                        </span>{' '}
                        Log out
                    </button>
                </li>
            </ul>
        </div>
    );
};
