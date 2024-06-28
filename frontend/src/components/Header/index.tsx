import {
  BarChart,
  Computer,
} from "lucide-react";
import logo from "../../assets/woodpel.png"
import { Separator } from "../ui/separator"

import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div>
      <div className="py-4  w-full px-16">
        <img src={logo} className="w-32" alt="" />
      </div>
      <Separator />
      <div className="flex justify-center py-4">
          <NavLink to={`/`}>
            <div className="font-light cursor-pointer text-zinc-100  border-2 border-green-500  transition ease-in flex gap-2 items-center bg-green-500 px-3 py-1 rounded-l-lg">
              <h2>Helpdesk</h2>
              <Computer strokeWidth={2} size={18} />
            </div>
          </NavLink>
          <NavLink to={`/graficos`}>
          <div className="font-light cursor-pointer text-zinc-900 hover:bg-green-200 hover:text-green-400  transition ease-in flex gap-2 items-center border-2 border-green-100 px-3 py-1 rounded-r-lg">
              <h2>KPIs</h2>
              <BarChart size={18} strokeWidth={2}/>
            </div>
          </NavLink>
    </div>
    </div>
  );
}

