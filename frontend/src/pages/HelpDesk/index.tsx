
import { TasksContext } from "../../contexts/TasksContext";
import { columns } from "./components/Columns";
import { DataTable } from "./components/DataTable";
import { useContext } from "react";


export function HelpDesk() {
  const { tasks } = useContext(TasksContext);

  console.log(tasks)

  return (
    <div>
      <h2 className="text-center mt-3 text-2xl text-green-700 font-bold">Tasks</h2>
      <div className="flex w-full gap-2 mt-3 justify-around">
        <div className="flex flex-col items-center">
          <h2>Pendente</h2>
          <DataTable columns={columns} data={tasks} type={"pendent"}/>
        </div>
        <div className="flex flex-col items-center" >
          <h2>Andamento</h2>
          <DataTable columns={columns} data={tasks} type={"progress"}/>
        </div>
        <div className="flex flex-col items-center">
          <h2>Finalizado</h2>
          <DataTable columns={columns} data={tasks} type={"finished"}/>
        </div>
      </div>
    </div>
  );
}
