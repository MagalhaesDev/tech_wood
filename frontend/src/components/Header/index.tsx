import {
  Computer,
  AlignEndHorizontal,
  Bell,
  CircleDollarSign,
  Trophy,
  Truck,
} from "lucide-react";
import imgLogo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="bg-zinc-900  p-3 h-screen fixed flex flex-col justify-between p-4">
      <img src={imgLogo} width={24} alt="logo" className="cursor-pointer" />
      <div>
        <div className="flex flex-col gap-6 items-center justify-center">
          <NavLink to={`/inventory`}>
            <div className="cursor-pointer hover:text-green-700 transition ease-in">
              <Truck size={24} />
            </div>
          </NavLink>
          <NavLink to={`/helpdesk`}>
            <div className="cursor-pointer hover:text-green-700 transition ease-in">
              <Computer size={24} />
            </div>
          </NavLink>
          <div className="cursor-pointer hover:text-green-700 transition ease-in">
            <AlignEndHorizontal size={24} />
          </div>
          <div className="cursor-pointer hover:text-green-700 transition ease-in">
            <CircleDollarSign size={24} />
          </div>
          <div className="cursor-pointer hover:text-green-700 transition ease-in">
            <Trophy size={24} />
          </div>
        </div>
      </div>
      <div className="cursor-pointer hover:text-green-700 transition ease-in">
        <Bell size={24} />
      </div>
    </div>
  );
}
