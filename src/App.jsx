import './App.scss';
import { HomeScreen } from './screens/HomeScreen';
import { OperationsScreen } from './screens/OperationsScreen';
import { Routes, Route } from 'react-router-dom';
import { LoginScreen } from './screens/LoginScreen';
import { CreateAcc } from './screens/CreateAcc';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/operations" element={<OperationsScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/newaccount" element={<CreateAcc />} />
      </Routes>
      <Toaster
        containerStyle={{
          fontWeight: 'bold',
        }}
      />
    </>
  );
}

export default App;
