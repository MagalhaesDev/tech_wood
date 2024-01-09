import { useContext } from "react";
import { TasksContext } from "../../../../contexts/TasksContext";
import { columns } from "./Columns";
import { DataTableProgress } from "./DataTable";

export function TableProgress() {
  const { tasksProgress } = useContext(TasksContext);

  return <DataTableProgress columns={columns} data={tasksProgress} />;
}
