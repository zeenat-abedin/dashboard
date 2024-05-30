import { Routes, Route } from 'react-router-dom';

import DashboardPage from "./pages/DashboardPage";
import SignInPage from "./pages/SignInPage";
import SignUp from './pages/SignUpPage';

function App() {
  return (
      <Routes>
      <Route path="/" element={<SignInPage />} /> 
      <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardPage/>} />
      </Routes>
  );
}

export default App;
