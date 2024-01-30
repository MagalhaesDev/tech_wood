import {
  Cpu,
  GalleryVerticalEnd,
  HardDrive,
  MemoryStick,
  Monitor,
  Video,
  Mouse,
  Printer,
  MoreHorizontal,
  Cable,
  HdmiPort,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { NewItem } from "./components/NewItem";

export function Inventory() {
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <h2 className="text-center text-2xl text-zinc-300 font-bold">
        Inventário de T.I
      </h2>

      <div className="grid cols-3 grid-cols-4 justify-items-center gap-3 w-3/4">
        <button className="w-48 h-48 border-2 border-green-900 flex flex-col gap-2 justify-center items-center rounded-md text-zinc-300 font-bold text-lg hover:bg-[#131313] hover:border-green-800 transition ease-in .3s">
          <NewItem />
        </button>
        <NavLink to={`/inventory?param=impressora`}>
          <button className="w-48 h-48 border-2 border-green-900 flex flex-col gap-2 justify-center items-center rounded-md text-zinc-300 font-bold text-lg hover:bg-[#131313] hover:border-green-800 transition ease-in .3s">
            <Printer size={48} />
            <p>Impressoras</p>
          </button>
        </NavLink>

        <NavLink to={`/inventory?param=periferico`}>
          <button className="w-48 h-48 border-2 border-green-900 flex flex-col gap-2 justify-center items-center rounded-md text-zinc-300 font-bold text-lg hover:bg-[#131313] hover:border-green-800 transition ease-in .3s">
            <Mouse size={48} />
            <p>Periféricos</p>
          </button>
        </NavLink>

        <NavLink to={`/inventory?param=monitor`}>
          <button className="w-48 h-48 border-2 border-green-900 flex flex-col gap-2 justify-center items-center rounded-md text-zinc-300 font-bold text-lg hover:bg-[#131313] hover:border-green-800 transition ease-in .3s">
            <Monitor size={48} />
            <p>Monitores</p>
          </button>
        </NavLink>

        <NavLink to={`/inventory?param=memoria_ram`}>
          <button className="w-48 h-48 border-2 border-green-900 flex flex-col gap-2 justify-center items-center rounded-md text-zinc-300 font-bold text-lg hover:bg-[#131313] hover:border-green-800 transition ease-in .3s">
            <MemoryStick size={48} />
            <p>Memoria Ram</p>
          </button>
        </NavLink>

        <NavLink to={`/inventory?param=processador`}>
          <button className="w-48 h-48 border-2 border-green-900 flex flex-col gap-2 justify-center items-center rounded-md text-zinc-300 font-bold text-lg hover:bg-[#131313] hover:border-green-800 transition ease-in .3s">
            <Cpu size={48} />
            <p>Processador</p>
          </button>
        </NavLink>

        <NavLink to={`/inventory?param=placa_video`}>
          <button className="w-48 h-48 border-2 border-green-900 flex flex-col gap-2 justify-center items-center rounded-md text-zinc-300 font-bold text-lg hover:bg-[#131313] hover:border-green-800 transition ease-in .3s">
            <HdmiPort size={48} />
            <p>Placa de video</p>
          </button>
        </NavLink>

        <NavLink to={`/inventory?param=ssd/hdd`}>
          <button className="w-48 h-48 border-2 border-green-900 flex flex-col gap-2 justify-center items-center rounded-md text-zinc-300 font-bold text-lg hover:bg-[#131313] hover:border-green-800 transition ease-in .3s">
            <HardDrive size={48} />
            <p>HDD/SSD</p>
          </button>
        </NavLink>

        <NavLink to={`/inventory?param=cameras`}>
          <button className="w-48 h-48 border-2 border-green-900 flex flex-col gap-2 justify-center items-center rounded-md text-zinc-300 font-bold text-lg hover:bg-[#131313] hover:border-green-800 transition ease-in .3s">
            <Video size={48} />
            <p>Câmeras</p>
          </button>
        </NavLink>

        <NavLink to={`/inventory?param=cabos`}>
          <button className="w-48 h-48 border-2 border-green-900 flex flex-col gap-2 justify-center items-center rounded-md text-zinc-300 font-bold text-lg hover:bg-[#131313] hover:border-green-800 transition ease-in .3s">
            <Cable size={48} />
            <p>Cabos</p>
          </button>
        </NavLink>

        <NavLink to={`/inventory?param=outros`}>
          <button className="w-48 h-48 border-2 border-green-900 flex flex-col gap-2 justify-center items-center rounded-md text-zinc-300 font-bold text-lg hover:bg-[#131313] hover:border-green-800 transition ease-in .3s">
            <MoreHorizontal size={48} />
            <p>Outros</p>
          </button>
        </NavLink>

        <NavLink to={`/inventory?param=all`}>
          <button className="w-48 h-48 border-2 border-green-900 flex flex-col gap-2 justify-center items-center rounded-md text-zinc-300 font-bold text-lg hover:bg-[#131313] hover:border-green-800 transition ease-in .3s">
            <GalleryVerticalEnd size={48} />
            <p>Todos</p>
          </button>
        </NavLink>
      </div>
    </div>
  );
}
