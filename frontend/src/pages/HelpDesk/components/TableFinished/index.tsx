import { useContext } from "react";
import { TasksContext } from "../../../../contexts/TasksContext";
import { columns } from "./Columns";
import { DataTableFinished } from "./DataTable";

export function TableFinished() {
  const { tasksConcluded } = useContext(TasksContext);

  return <DataTableFinished columns={columns} data={tasksConcluded} />;
}
