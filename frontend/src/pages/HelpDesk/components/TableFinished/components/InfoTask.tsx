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
    <DialogContent className="sm:max-w-[425px] flex flex-col items-center">
      <DialogHeader>
        <DialogTitle>
          <div className="flex items-center gap-8 text-center justify-center">
            <h1 className="text-xl text-green-600">{taskActually?.name}</h1>
          </div>
        </DialogTitle>
        <DialogDescription>
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-green-400 font-bold text-[1rem]">
                Descrição:
              </h2>
              <p> {taskActually?.description}</p>
            </div>
            <div>
              <h2 className="text-green-400 font-bold text-[1rem]">
                Data e hora da conclusão:
              </h2>
              <p className="text-sm text-zinc-400">{formattedDate}</p>
            </div>
            <div>
              <h2 className="text-green-400 font-bold text-[1rem]">
                Tempo de serviço
              </h2>
              <p className="text-sm text-zinc-400">
                25 Minutos
              </p>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
