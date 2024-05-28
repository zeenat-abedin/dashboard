import Counter from "./components/Counter/Counter";
import Dashboard from "./components/Dashboard/Dashboard";
import RichTextEditor from "./components/RichTextEditor/RichTextEditor";

function App() {
  return (
    <>
    <div className="top-container">
      <Counter />
      <RichTextEditor/>
    </div>
    <Dashboard />
    </>
  );
}

export default App;
