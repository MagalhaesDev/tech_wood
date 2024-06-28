import { useContext } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../../../components/ui/dialog";
import { TasksContext } from "../../../../../contexts/TasksContext";

interface AcceptedHelpProps {
  columnId: string;
}

export function InfoTask({ columnId }: AcceptedHelpProps) {
  const { tasksConcluded } = useContext(TasksContext);

  const taskActually = tasksConcluded.find((task) => task.id === columnId);

  let dateFormatted;
  let dateFormattedInit;

  if (taskActually) {
    dateFormatted = new Date(taskActually.finishedDate);
  }

  if (taskActually) {
    dateFormattedInit = new Date(taskActually.acceptedDate);
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


  return (
    <DialogContent className="flex flex-col">
    <DialogHeader>
      <DialogTitle>
        <h1>{taskActually?.name}</h1>
      </DialogTitle>
      <DialogDescription>
        <div className="flex flex-col gap-6 mt-6">
          <div>
            <h2 className="text-stone-900">Descrição:</h2>
            <p> {taskActually?.description}</p>
          </div>
          <div>
            <h2 className="text-stone-900">Data e hora da conclusão:</h2>
            <p className="text-sm text-zinc-400">{formattedDate}</p>
          </div>
          <div>
            <h2 className="text-stone-900">Tempo de serviço</h2>
            <p className="text-sm text-zinc-400">25 Minutos</p>
          </div>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
  );
}
