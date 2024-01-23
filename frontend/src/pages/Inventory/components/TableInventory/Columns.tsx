import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, CheckCircle2 } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Tasks } from "../../../../contexts/TasksContext";
import { Dialog, DialogTrigger } from "../../../../components/ui/dialog";

export const columns: ColumnDef<Tasks>[] = [
  {
    accessorKey: "ticket",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Código
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "priority",
    header: "Grupo",
  },
  {
    accessorKey: "name",
    header: "Descrição",
  },
  {
    accessorKey: "problem",
    header: "Quantidade",
  },
  {
    accessorKey: "problem",
    header: "Unidade",
  },
  {
    accessorKey: "description",
    header: () => <div>Departamento</div>,
    cell: ({ row }) => {
      const formatted = String(row.getValue("description"));

      return (
        <div>
          {formatted.length > 60 ? `${formatted.slice(0, 60)} ...` : formatted}
        </div>
      );
    },
  },
  {
    accessorKey: "acceptedDate",
    header: () => <div>Data compra</div>,
    cell: ({ row }) => {
      const dateFormatted = new Date(row.getValue("acceptedDate"));
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "America/Sao_Paulo",
      };
      const formatted = new Intl.DateTimeFormat("pt-BR", options).format(
        dateFormatted
      );

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "id",
    header: () => <div className="text-right "></div>,
    cell: () => {
      return (
        <div className="flex justify-end gap-2 items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <CheckCircle2 size={18} />
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      );
    },
  },
];
