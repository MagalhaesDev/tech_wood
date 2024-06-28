import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface Tasks {
  id: string; 
  name: string; 
  ticket: string;     
  description: string;  
  priority: string;  
  department: string;
  problem: string;
  createDate:   Date;
  acceptedDate: Date;
  finishedDate: Date;
}


interface TasksContext {
  tasksPendent: Tasks[],
  tasksProgress: Tasks[],
  tasksConcluded: Tasks[],
}

export const TasksContext = createContext({} as TasksContext);

interface TasksContextProviderProps {
  children: ReactNode;
}

export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    api
      .get("http://192.168.15.41:3000/tasks")
      .then((response) => setTasks(response.data));
  }, []);

  const tasksPendent = tasks.filter(task => !task.priority || task.priority === "");
  const tasksProgress = tasks.filter(task => ["BAIXA", "MEDIA", "ALTA", "URGENTE"].includes(task.priority));
  const tasksConcluded = tasks.filter(task => task.priority === "CONCLUIDO");


  return (
    <TasksContext.Provider value={{ tasksPendent, tasksProgress ,tasksConcluded }}>{children}</TasksContext.Provider>
  );
}
