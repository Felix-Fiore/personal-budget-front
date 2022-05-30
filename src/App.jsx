import './App.scss';
import { HomeScreen } from './screens/HomeScreen';
import { OperationsScreen } from './screens/OperationsScreen';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/layout/NavBar';
import { LoginScreen } from './screens/LoginScreen';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/operations" element={<OperationsScreen />} />
                <Route path="/login" element={<LoginScreen />} />
            </Routes>
        </>
    );
}

export default App;
