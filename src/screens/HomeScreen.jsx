import { NavBar } from '../components/layout/NavBar.jsx';
import { OperationsList } from '../components/layout/OperationsList.jsx';
import { TotalAmount } from '../components/layout/TotalAmount.jsx';

export const HomeScreen = () => {
    return (
        <>
            <NavBar />
            <TotalAmount />
            <OperationsList />
        </>
    );
};
