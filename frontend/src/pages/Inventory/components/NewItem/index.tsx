import { Plus } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../../../../components/ui/dialog";

import { NewItemForm } from "./components/NewItemForm";

export function NewItem() {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-48 h-48 border-green-900 flex flex-col gap-2 justify-center items-center rounded-md text-zinc-300 font-bold text-lg hover:bg-[#131313] hover:border-green-800 transition ease-in .3s">
        <Button variant="outline" className="h-full w-full border-0">
          <Plus size={48}/>
          Cadastrar
          </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[870px]">
        <NewItemForm />
      </DialogContent>
    </Dialog>
  )
}
