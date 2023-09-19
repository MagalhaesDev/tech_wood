import { Separator } from "@radix-ui/react-separator";
import { ActiveList } from "./components/ActiveList";
import { Button } from "@/components/ui/button";
import { ArrowLeftToLine, QrCode } from "lucide-react";

export function Active() {
  return (
    <main className="mx-[10rem]">
      <div className="flex items-center justify-between">
        <ArrowLeftToLine width={28} className="text-green-700 transition ease-in cursor-pointer hover:text-white"/>
        <h2 className="text-2xl center my-5 text-white font-bold">
          i5 5 geração 8gb ram ssd 225gb
        </h2>
        <Button className="font-bold text-zinc-100 flex items-center justify-center gap-1">
          QRCODE
          <QrCode  width={18} strokeWidth={3}/>
        </Button>
      </div>
      <h3 className=" font-bold text-lg text-zinc-300 ">
        Informações:
      </h3>
      <ul className="grid grid-cols-3  justify-center items-center  px-3 rounded-md bg-zinc-900">
        <ActiveList title="Categoria:" description="Informatica" />
        <ActiveList title="Data aquisição:" description="23/07/2023" />
        <ActiveList title="Valor compra:" description="R$2300,00" />
        <ActiveList title="Fornecedor:" description="InfoBox" />
        <ActiveList title="Nota fiscal:" description="32332.3221.03-2" />
        <ActiveList title="Taxa de depreciação:" description="5% mês" />
        <ActiveList title="Localização:" description="Departamento tecnico" />
        <ActiveList title="Vida útil:" description="132 dias" />
        <ActiveList title="Valor residual:" description="R$500,00" />
      </ul>
      <Separator />
      <h3 className=" font-bold text-lg text-zinc-300 mt-5">
        Quantidade de:
      </h3>

      <ul className="grid grid-cols-3  justify-center items-center  px-3 rounded-md bg-zinc-900">
        <ActiveList title="Itens do fornecedor:" description="21" />
        <ActiveList title="Movimentações:" description="4" />
        <ActiveList title="Manutenção:" description="2" />
      </ul>

      <h3 className="font-bold text-lg text-zinc-300 mt-5">
        Histórico de Manutenção:
      </h3>

      <h3 className="font-bold text-lg text-zinc-300 mt-5">
        Histórico de Movimentação:
      </h3>
    </main>
  );
}
