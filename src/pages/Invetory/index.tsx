import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FilterActive } from "./components/FilterActive";
import { DialogNewActive } from "./components/DialogNewActive";
import { EditActive } from "./components/EditActive";
import { InformationActive } from "./components/InformationActive";

export function Invetory() {
  return (
    <main className="mt-5 px-[5rem]">
      <div className="flex justify-between">
        <div>
          <button className="bg-green-900 px-7 py-1.5 font-bold rounded-tl-sm">
            Listagem
          </button>
          <button className="border-0 border-white transition ease-in 2s px-4 py-1 font-bold rounded-tr-sm">
            Gráfico
          </button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <FilterActive />
          <DialogNewActive />
        </div>
      </div>
      <Table className="mt-1">
        <TableCaption>Lista invetário de ativos fixos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-white">Categoria</TableHead>
            <TableHead className="text-white">Data compra</TableHead>
            <TableHead className="text-white">Descrição</TableHead>
            <TableHead className="text-right text-white">Localização</TableHead>
            <TableHead className="text-right text-white">Valor atual</TableHead>
            <TableHead className="text-right text-white">Editar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>15/09/2023</TableCell>
            <TableCell>Ipad</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="flex justify-end gap-3">
              <EditActive />
              <InformationActive />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
