import { useContext } from "react";
import { TasksContext } from "../../../../contexts/TasksContext";
import { columns } from "./Columns";
import { DataTableProgress } from "./DataTable";

export function TableProgress() {
  const { tasksProgress } = useContext(TasksContext);

  function comparePriorities(a: string, b: string): number {
    const priorityOrder = ["URGENTE", "ALTA", "MEDIA", "BAIXA"];
  
    return priorityOrder.indexOf(a) - priorityOrder.indexOf(b);
  }

  const taskProgressPriority = tasksProgress.sort((taskA, taskB) => {
    return comparePriorities(taskA.priority, taskB.priority);
  });

  return <DataTableProgress columns={columns} data={taskProgressPriority} />;
}
