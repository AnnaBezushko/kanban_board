import Layout from "./components/layout/layout";
import { BrowserRouter } from "react-router-dom";
import {TaskProvider} from "./components/hooks/tasks/taskProvider";

function App() {
  return (
    <BrowserRouter>
        <TaskProvider>
      <div className="App">
        <Layout />
      </div>
        </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
