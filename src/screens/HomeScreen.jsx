import { LastOperations } from '../components/layout/LastOperations.jsx';
import { NavBar } from '../components/layout/NavBar.jsx';
import { TotalAmount } from '../components/layout/TotalAmount.jsx';

export const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <TotalAmount />
      <LastOperations />
    </>
  );
};
