import Counter from "./components/Counter/Counter";
import Dashboard from "./components/Dashboard/Dashboard";
import RichTextEditor from "./components/RichTextEditor/RichTextEditor";
import UserDataForm from "./components/UserDataForm/UserDataForm";

function App() {
  return (
    <>
    <div className="top-container">
      <Counter />
      <RichTextEditor/>
      </div>
      <div className="bottom-container">
        <UserDataForm/>
        <Dashboard />
      </div>
    </>
  );
}

export default App;
