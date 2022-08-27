import styles from './totalAmount.module.scss';
import { useSelector } from 'react-redux';

export const TotalAmount = () => {
  const userName = useSelector((state) => state.user.name);

  const { operations } = useSelector((state) => state.operations);

  const sumAmounts = (operations) => {
    // if the operation type is income, add the amount to the total amount, if it is outcome, subtract the amount from the total amount
    const totalAmount = operations.reduce((acc, operation) => {
      if (operation.type === 'Ingreso') {
        return acc + Number(operation.amount);
      } else {
        return acc - Number(operation.amount);
      }
    }, 0);
    return totalAmount;
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Bienvenido {userName.toUpperCase()}!</h2>
      </div>
      <div className={styles.amountContainer}>
        <div>
          <h3>Éste es tu balance actual</h3>
        </div>
        <div className="totalCash">
          <p>{sumAmounts(operations)}</p>
        </div>
      </div>
    </div>
  );
};
