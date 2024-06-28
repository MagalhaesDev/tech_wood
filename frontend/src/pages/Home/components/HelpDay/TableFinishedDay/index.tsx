import { Tasks } from "../../../../../contexts/TasksContext";
import { columns } from "./Columns";
import { DataTableFinished } from "./DataTable";

interface TableFinishedDayProps {
  tableFinishedDay: Tasks[];
}

export function TableFinishedDay({tableFinishedDay}: TableFinishedDayProps ) {

  return <DataTableFinished columns={columns} data={tableFinishedDay} />;
}
