import { useContext } from "react";
import { TasksContext } from "../../../../contexts/TasksContext";
import { columns } from "./Columns";
import { DataTablePendent } from "./DataTable";

export function TablePendent() {
  const { tasksPendent } = useContext(TasksContext);

  return <DataTablePendent columns={columns} data={tasksPendent} />;
}
