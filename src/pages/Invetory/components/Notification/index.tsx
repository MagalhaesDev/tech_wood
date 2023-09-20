import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Bell, Info } from "lucide-react";

export function Notification() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center  bg-green-900 p-2 rounded-sm hover:bg-[#0D5829] transition ease-in 2s py-1">
        <Bell width={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Notificaçoes de validade:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-zinc-400 flex gap-2 justify-around">
          <div className="flex gap-2 items-center">
            <Info width={18} />
            <span className="text-zinc-100">
              i5 5 geração 8gb ram ssd 225gb
            </span>
          </div>
          <p>Expira em 3 dias</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-zinc-400 flex gap-2 justify-between">
          <div className="flex gap-2 items-center">
            <Info width={18} />
            <span className="text-zinc-100">Mesa de mdf 1,30x1,50</span>
          </div>
          <p>Expira em 5 dias</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-zinc-400 flex gap-2 justify-between">
          <div className="flex gap-2 items-center">
            <Info width={18} />
            <span className="text-zinc-100">Monitor 4k samsung </span>
          </div>
          <p>Expira em 5 dias</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-zinc-400 flex gap-2 justify-between">
          <div className="flex gap-2 items-center">
            <Info width={18} />
            <span className="text-zinc-100">Nobreak Vdux 220w/110w</span>
          </div>
          <p>Expira em 14 dias</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
