import { useContext } from "react";
import { DataTableInventory } from "./components/TableInventory/DataTable";
import { TasksContext } from "../../contexts/TasksContext";
import { columns } from "./components/TableInventory/Columns";

export function Inventory() {
  const { tasksConcluded } = useContext(TasksContext);

  return (
    <div>
      <h2 className="my-10 text-center text-xl text-green-400">Inventário de T.I</h2>
      <DataTableInventory columns={columns} data={tasksConcluded} />
    </div>
  );
}
