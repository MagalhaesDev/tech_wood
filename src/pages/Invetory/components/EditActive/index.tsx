import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FileEdit } from "lucide-react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Actives } from "@/contexts/ActivesContext";
import { api } from "@/services/api";
import { EditInputDialog } from "./EditInputDialog";

interface EditActiveProps {
  id: string
}

export function EditActive({id}: EditActiveProps) {
  const form = useForm();
  const [active, setActives] = useState<Actives>();
  useEffect(() => {
    api
      .get(`http://localhost:3000/actives/${id}`)
      .then((response) => {
        setActives(response.data);
      })

  }, []);

  if(!active) return;

  return (
    <Sheet>
      <SheetTrigger className="hover:text-green-700 transition ease-in 1s">
        <FileEdit width={18} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-3">
          <SheetTitle>Editar as informações</SheetTitle>
          <SheetDescription>
            Atualize as informações nos campos abaixo:
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form className="flex flex-col gap-5">
            <div>
              <EditInputDialog label="Descrição" item={active.description}/>
              <EditInputDialog label="Valor compra" item={active.value_buy}/>
              <EditInputDialog label="Fornecedor" item={active.provider}/>
              <EditInputDialog label="Taxa de depreciação" item={active.rate}/>
              <EditInputDialog label="Localização" item={active.locale}/>
            </div>

            <Button
              type="submit"
              className="text-zinc-100 hover:bg-[#16a34a] transition block"
            >
              Atualizar
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
