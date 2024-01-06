import { Angry, Laugh, Smile } from "lucide-react";
import { DonutsSatisfaction } from "./DonutsSatisfaction";

export function GraphicsSatisfaction() {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-zinc-300 text-sm">Satisfação de usuário</h2>
      <div className="flex items-center justify-center px-6">
        <DonutsSatisfaction />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 ">
            <Laugh className="text-green-600" />
            <span className="font-bold text-green-600">23</span>
          </div>
          <div className="flex items-center gap-1">
            <Smile className="text-yellow-600" />
            <span className="font-bold text-yellow-600">13</span>
          </div>
          <div className="flex items-center gap-1">
            <Angry className="text-red-600" />
            <span className="font-bold text-red-600">03</span>
          </div>
        </div>
      </div>
    </div>
  );
}
