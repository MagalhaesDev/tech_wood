import * as React from "react";

import { Button } from "../../../../components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../../../components/ui/drawer";
import { TasksContext } from "../../../../contexts/TasksContext";
import { TableFinishedDay } from "./TableFinishedDay";

export function HelpDayHours() {
  const { tasksConcluded } = React.useContext(TasksContext);

  const tableFinishedDay = tasksConcluded.filter(
    (task) =>
      new Date(task.finishedDate).getDate() === new Date().getDate() &&
      new Date(task.finishedDate).getMonth() === new Date().getMonth() &&
      new Date(task.finishedDate).getFullYear() === new Date().getFullYear()
  );

  const tableFinishedDayTotal = tableFinishedDay.reduce((acc, task) => {
    const difference =
      new Date(task.finishedDate).getTime() -
      new Date(task.acceptedDate).getTime();
    return (acc += difference);
  }, 0);

  const totalMinutes = tableFinishedDayTotal / (1000 * 60);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);

  const formatNumber = num => num < 10 ? `0${num}` : num.toString();

  const formattedTime = `${formatNumber(hours)}:${formatNumber(minutes)}`;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="flex flex-col h-24 gap-6"
          disabled={tableFinishedDay.length === 0}
        >
          <h2 className="text-zinc-900 font-bold text-md">Horas Totais:</h2>
          <div className="text-center text-[3rem] font-bold text-green-600 flex">
            {formattedTime}
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div>
          <DrawerHeader className="flex flex-col items-center">
            <DrawerTitle>Chamados de hoje</DrawerTitle>
            <DrawerDescription>
              Acompanhe abaixo todos os chamados que foram concluidos hoje
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="my-6">
              <TableFinishedDay tableFinishedDay={tableFinishedDay} />
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="destructive">Fechar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
