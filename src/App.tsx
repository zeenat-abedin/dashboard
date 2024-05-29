import { useSelector } from "react-redux";
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Dashboard from "./components/Dashboard/Dashboard";
import RichTextEditor from "./components/RichTextEditor/RichTextEditor";
import UserDataForm from "./components/UserDataForm/UserDataForm";
import { RootState } from "./store/store";
import ErrorFallback from "./components/ErrorFallback";

function App() {
  const userData = useSelector((state: RootState) => state.userData[0]);
  const navigate = useNavigate()

   const handleErrorReset = () => {
    navigate("/");
  };
  return (
  <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleErrorReset}>
    <div className="top-container">
      <Counter />
        <RichTextEditor userData={userData } />
      </div>
      <div className="bottom-container">
        <UserDataForm/>
        <Dashboard />
      </div>
  </ErrorBoundary>
  );
}

export default App;
