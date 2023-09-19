import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FileEdit } from "lucide-react";
import { InputDialog } from "../InputDialog";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

export function EditActive() {
  const form = useForm();

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
              <InputDialog nameInput="category" label="Categoria" />
              <InputDialog nameInput="description" label="Descrição" />
              <InputDialog nameInput="value_buy" label="Valor compra" />
              <InputDialog nameInput="supplier" label="Fornecedor" />
              <InputDialog
                nameInput="depreciation"
                label="Taxa de depreciação"
              />
              <InputDialog nameInput="locale" label="Localização" />

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
