import { Button } from "../../../../components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../../../../components/ui/dialog";

import { NewItemForm } from "./components/NewItemForm";

export function NewItem() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Cadastrar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[870px]">
        <h2 className="text-center text-green-600 font-bold text-xl">Cadastrar novo produto</h2>
        <NewItemForm />
      </DialogContent>
    </Dialog>
  )
}
