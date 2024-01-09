import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../../../components/ui/dialog";
import { Button } from "../../../../../components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { api } from "../../../../../services/api";
import { useContext } from "react";
import { TasksContext } from "../../../../../contexts/TasksContext";

interface AcceptedHelpProps {
  columnId: string;
}

export function ConcludeTask({ columnId }: AcceptedHelpProps) {
  const { tasksProgress } = useContext(TasksContext);

  const taskActually = tasksProgress.find((task) => task.id === columnId);

  let dateFormatted;

  if (taskActually) {
    dateFormatted = new Date(taskActually.createDate);
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Sao_Paulo",
  };

  const formattedDate = new Intl.DateTimeFormat("pt-BR", options).format(
    dateFormatted
  );

  function handleSubmitConcludedTask() {
    const updatePriority = {
      id: columnId,
      priority: "CONCLUIDO",
    };

    api.put("http://localhost:3000/tasks/concluded", updatePriority);

    window.location.reload();
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>
          <div className="flex items-center gap-8">
            <h1 className="text-2xl text-green-600">{taskActually?.problem}</h1>
            <p className="text-sm text-zinc-400">{formattedDate}</p>
          </div>
          <h2 className="py-2 text-sm">
            {taskActually?.name} <span>- {taskActually?.department}</span>
          </h2>
        </DialogTitle>
        <DialogDescription>{taskActually?.description}</DialogDescription>
      </DialogHeader>
      <div className="flex gap-3">
        <DialogClose asChild>
          <Button
            type="button"
            className="bg-red-500 text-white hover:bg-red-700"
          >
            Cancelar
          </Button>
        </DialogClose>
        <Button onClick={() => handleSubmitConcludedTask()}>Concluido</Button>
      </div>
    </DialogContent>
  );
}
