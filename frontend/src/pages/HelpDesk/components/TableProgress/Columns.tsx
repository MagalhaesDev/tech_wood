import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, CheckCircle2 } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Tasks } from "../../../../contexts/TasksContext";
import { Dialog, DialogTrigger } from "../../../../components/ui/dialog";
import { ConcludeTask } from "./components/ConcludeTask";



export const columns: ColumnDef<Tasks>[] = [
  {
    accessorKey: "ticket",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ticket
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "priority",
    header: "Prioridade",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "problem",
    header: "Problema",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "acceptedDate",
    header: () => <div>Data</div>,
    cell: ({ row }) => {
      const dateFormatted = new Date(row.getValue("acceptedDate"));
      const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false,
        timeZone: 'America/Sao_Paulo'
      };
      const formatted = new Intl.DateTimeFormat("pt-BR", options).format(dateFormatted);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "id",
    header: () => <div className="text-right "></div>,
    cell: ({cell}) => {
      return (
        <div className="flex justify-end gap-2 items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <CheckCircle2  size={18} />
              </Button>
            </DialogTrigger>
            <ConcludeTask columnId={cell.row.original.id}/>
          </Dialog>
        </div>
      );
    },
  },
];