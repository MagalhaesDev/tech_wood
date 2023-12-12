import { api } from "@/services/api";
import { ReactNode, createContext, useEffect, useState } from "react";

export interface Tasks {
  id: string;
  name: string;
  description: string;
  priority: string;
  department: string;
  problem: string;
}


interface TasksContext {
  tasks: Tasks[];
}

export const TasksContext = createContext({} as TasksContext);

interface TasksContextProviderProps {
  children: ReactNode;
}

export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    api
      .get("http://localhost:3000/tasks")
      .then((response) => setTasks(response.data));
  }, []);


  return (
    <TasksContext.Provider value={{ tasks }}>{children}</TasksContext.Provider>
  );
}
