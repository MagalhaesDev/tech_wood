import { ActiveList } from "./components/ActiveList";
import { Button } from "@/components/ui/button";
import { ArrowLeftToLine, BadgeInfo, QrCode, Wrench } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Actives } from "@/contexts/ActivesContext";
import { api } from "@/services/api";

export function Active() {
  const navigate = useNavigate();
  const params = useParams();
  const [active, setActives] = useState<Actives>();
  useEffect(() => {
    api
      .get(`http://localhost:3000/actives/${params.id}`)
      .then((response) => {
        setActives(response.data);
      })
      .catch(() => {
        navigate("/actives");
      });
  }, [params.id, navigate]);

  return (
    <main className="mx-[10rem]">
      <div className="flex items-center justify-between">
        <button onClick={() => navigate(-1)}>
          <ArrowLeftToLine
            width={48}
            strokeWidth={3}
            className="text-green-700 transition ease-in cursor-pointer hover:text-white"
          />
        </button>
        <h2 className="text-2xl center my-5 text-white font-bold">
          {active?.description}
        </h2>
        <Button className="font-bold text-zinc-100 flex items-center justify-center gap-1">
          QRCODE
          <QrCode width={18} strokeWidth={3} />
        </Button>
      </div>
      <Separator className="h-[2px] mb-5 bg-zinc-700" />
      <h3 className=" font-bold text-lg text-zinc-300 ">Informações:</h3>
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

      <Separator className="my-4 h-[1px] mb-5 bg-zinc-700" />

      <h3 className=" font-bold text-lg text-zinc-300 mt-5">Quantidade de:</h3>

      <ul className="grid grid-cols-3  justify-center items-center  px-3 rounded-md bg-zinc-900">
        <ActiveList title="Itens do fornecedor:" description="21" />
        <ActiveList title="Movimentações:" description="4" />
        <ActiveList title="Manutenção:" description="2" />
      </ul>

      <Separator className="my-4 h-[1px] mb-5 bg-zinc-700" />

      <h3 className="font-bold text-lg text-zinc-300 mt-5">
        Histórico de Manutenção:
      </h3>
      <div className="flex flex-col gap-4 text-zinc-400 text-lg justify-center items-center  p-5 rounded-md bg-zinc-900">
        <Wrench />
        <p>Não há nenhuma manutenção</p>
      </div>

      <Separator className="my-4 h-[1px] mb-5 bg-zinc-700" />

      <h3 className="font-bold text-lg text-zinc-300 mt-5">
        Histórico de Movimentação:
      </h3>
      <div className="flex flex-col gap-4 text-zinc-400 text-lg justify-center items-center  p-5 rounded-md bg-zinc-900">
        <BadgeInfo />
        <p>Não há nenhuma movimentação</p>
      </div>
    </main>
  );
}
