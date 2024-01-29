import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { TasksContextProvider } from "./contexts/TasksContext";
import { InventoryContextProvider } from "./contexts/InventoryContenxt";

export function App() {
  return (
    <BrowserRouter>
      <InventoryContextProvider>
        <TasksContextProvider>
          <Router />
        </TasksContextProvider>
      </InventoryContextProvider>
    </BrowserRouter>
  );
}
