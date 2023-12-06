import { GraphicsCalled } from "./GraphicsCalled";
import { GraphicsSatisfaction } from "./GraphicsSatisfaction";

export function Dashboard() {
  return (
    <div className=" grid grid-cols-4 gap-3 ">
      <div className="bg-zinc-900 rounded-md p-3 flex flex-col items-center gap-3">
        <h2 className="text-zinc-300 font-bold text-lg">Chamados total:</h2>
        <div className="text-center text-[3rem] font-bold text-green-500 ">
          130
        </div>
      </div>
      <div className="bg-zinc-900 rounded-md  p-3 flex flex-col items-center gap-3">
        <h2 className="text-zinc-300 font-bold text-lg">
          Chamados em andamento:
        </h2>
        <div className="text-center text-[3rem] font-bold text-red-500">10</div>
      </div>
      <div className="bg-zinc-900 rounded-md  p-3 flex flex-col items-center gap-3">
        <h2 className="text-zinc-300 font-bold text-lg">Total Despesas:</h2>
        <div className="text-center text-[3rem] font-bold text-green-500">
          $ 10 mil
        </div>
      </div>
      <div className="bg-zinc-900 row-span-2 rounded-md flex flex-col items-center justify-center gap-3">
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-bold text-xl">Total de ativos</h2>
          <div className="text-green-500 text-[2rem] font-bold">97</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-bold text-xl">Total de descarte</h2>
          <div className="text-red-500 text-[2rem] font-bold">27</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-bold text-xl">Total de manutenção</h2>
          <div className="text-red-500 text-[2rem] font-bold">37</div>
        </div>
      </div>
      <div className="bg-zinc-900 col-start-1 col-end-4 rounded-md">
        <GraphicsCalled />
      </div>
      <div className="bg-zinc-900 col-span-2 rounded-md p-1 ">
        <GraphicsSatisfaction />
      </div>
      <div className="bg-zinc-900 rounded-md"></div>
      <div className="bg-zinc-900 rounded-md"></div>
    </div>
  );
}
