import { Button } from "../../../../components/ui/button";
import {
  Form
} from "../../../../components/ui/form";
import { useForm } from "react-hook-form";
import { InputDialog } from "../InputDialog";

export function NewActiveForm() {
  const form = useForm();

  return (
    <Form {...form}>
      <form className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-2 ">
          <InputDialog nameInput="category" label="Categoria"/>
          <InputDialog nameInput="description" label="Descrição"/>
          <InputDialog nameInput="date_aqui" label="Data aquisição"/>
          <InputDialog nameInput="value_buy" label="Valor compra"/>
          <InputDialog nameInput="supplier" label="Fornecedor"/>
          <InputDialog nameInput="NF" label="Nota Fiscal" placeholder="Opcional"/>
          <InputDialog nameInput="depreciation" label="Taxa de depreciação"/>
          <InputDialog nameInput="locale" label="Localização"/>
          <InputDialog nameInput="life_util" label="Vida útil"/>
        </div>

        <Button
          type="submit"
          className="text-zinc-100 hover:bg-[#16a34a] transition block"
        >
          Cadastrar
        </Button>
      </form>
    </Form>
  );
}
