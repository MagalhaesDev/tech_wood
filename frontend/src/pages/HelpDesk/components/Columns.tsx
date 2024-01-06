import { ArrowUpDown, Ticket } from "lucide-react";

import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { AcceptedHelp } from "./AcceptedHelp";
import { Button } from "../../../components/ui/button";
import { Tasks } from "../../../contexts/TasksContext";
import { ColumnDef } from "@tanstack/react-table";

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
    accessorKey: "id",
    header: () => <div className="text-right "></div>,
    cell: () => {
      return (
        <div className="flex justify-end gap-2 items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Ticket size={18} />
              </Button>
            </DialogTrigger>
            <AcceptedHelp />
          </Dialog>
        </div>
      );
    },
  },
];
