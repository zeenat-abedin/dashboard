import { Routes, Route } from 'react-router-dom';

import DashboardPage from "./pages/DashboardPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
      <Routes>
      <Route path="/" element={<SignInPage />} /> 
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<DashboardPage/>} />
      </Routes>
  );
}

export default App;
