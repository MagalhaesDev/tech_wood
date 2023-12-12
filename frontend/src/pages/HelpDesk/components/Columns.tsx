import { Button } from "@/components/ui/button";
import { Tasks } from "@/contexts/TasksContext";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, CircleEllipsis } from "lucide-react";
import { NavLink } from "react-router-dom";

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
    cell: ({ row }) => {
      const id: string = row.getValue("id");

      return (
        <div className="flex justify-end gap-2 items-center">
          <NavLink
            className="hover:text-green-700 transition ease-in 1s"
            to={`/actives/${id}`}
          >
            <CircleEllipsis size={18}/>
          </NavLink>
        </div>
      );
    },
  },
];
