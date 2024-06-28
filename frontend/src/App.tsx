import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { TasksContextProvider } from "./contexts/TasksContext";

export function App() {
  return (
    <BrowserRouter>
        <TasksContextProvider>
          <Router />
        </TasksContextProvider>
    </BrowserRouter>
  );
}
