import { useContext } from "react";
import { TasksContext } from "../../../contexts/TasksContext";
import { HelpDay } from "./HelpDay";
import { HelpDayHours } from "./HelpDayHours";

export function Dashboard() {
  const { tasksConcluded } =
    useContext(TasksContext);


  const tasksToDay = tasksConcluded.filter(
    (task) => new Date(task.finishedDate).getDay() === new Date().getDay()
  );

  return (
    <>
      <h1 className="text-md mb-4 ">Diário:</h1>
      <div className=" grid grid-cols-4 gap-3 ">
        <HelpDay />
        <HelpDayHours />
      </div>
    </>
  );
}
