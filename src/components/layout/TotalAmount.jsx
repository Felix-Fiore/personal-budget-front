import styles from './totalAmount.module.scss';

export const TotalAmount = () => {
    return (
        <div className={styles.container}>
            <div>
                <h2>Welcome User!</h2>
            </div>
            <div className={styles.amountContainer}>
                <div>
                    <h3>This is your balance</h3>
                </div>
                <div className="totalCash">
                    <p>$3000</p>
                </div>
            </div>
        </div>
    );
};
