import { TablePendent } from "./components/TablePendent";
import { TableProgress } from "./components/TableProgress";
import { TableFinished } from "./components/TableFinished";
import { Separator } from "../../components/ui/separator";

export function HelpDesk() {
  return (
    <div>
      <div className="flex flex-col w-full mt-6 gap-5 text-sm">
        <div className="flex flex-col">
          <h2 className="text-zinc-100  bg-red-500 w-min px-3 py-1 rounded-2xl">Aguardando</h2>
          <TablePendent />
        </div>
        <Separator />
        <div className="flex flex-col">
          <h2 className="text-zinc-100 bg-yellow-600 w-min px-3 py-1 rounded-2xl">Andamento</h2>
          <TableProgress />
        </div>
        <Separator />
        <div className="flex flex-col">
          <h2 className="text-zinc-100  bg-green-700 w-min px-3 py-1 rounded-2xl">Finalizado</h2>
          <TableFinished />
        </div>
      </div>
    </div>
  );
}
