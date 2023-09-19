import { Bell, LogOut, Search, User2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <>
      <header className="flex justify-between items-center mx-10 my-3">
        <h1 className="text-2xl">
          <strong className="text-[#16a34a]">Wood</strong>Actives
        </h1>
        <div>
          <form action="">
              <label htmlFor="" className="flex items-center gap-2">
                <Input className="border-green-800 w-[20rem]" placeholder="Pesquise aqui..."/>
                <Search className="text-green-800 cursor-pointer hover:text-white transition ease-in 2s"/>
              </label>
          </form>
        </div>
        <div className="flex gap-7">
          <button>
            <Bell width={18} className="text-[#16a34a]" />
          </button>
          <div className="flex gap-3">
            <User2 className="text-[#16a34a]" />
            <p>Mateus Magalhães</p>
          </div>
          <LogOut className="text-[#16a34a] cursor-pointer hover:text-[#0D5829] ease-linear transition 1s" />
        </div>
      </header>
      <Separator />
    </>
  );
}
