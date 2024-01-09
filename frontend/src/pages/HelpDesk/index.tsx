import { TablePendent } from "./components/TablePendent";
import { TableProgress } from "./components/TableProgress";
import { TableFinished } from "./components/TableFinished";
import { Separator } from "../../components/ui/separator";

export function HelpDesk() {
  return (
    <div>
      <div className="flex flex-col w-full mt-6 gap-5">
        <div className="flex flex-col">
          <h2 className="text-center text-2xl text-red-700 font-bold">Pendente</h2>
          <TablePendent />
        </div>
        <Separator />
        <div className="flex flex-col">
          <h2 className="text-center text-xl text-yellow-700 font-bold">Andamento</h2>
          <TableProgress />
        </div>
        <Separator />
        <div className="flex flex-col">
          <h2 className="text-center text-xl text-green-700  font-bold">Finalizado</h2>
          <TableFinished />
        </div>
      </div>
    </div>
  );
}
