import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../../../components/ui/form";
import { Button } from "../../../../../components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../../../../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import { InputDialog } from "./InputDialog";
import { useContext } from "react";
import { InventoryContext } from "../../../../../contexts/InventoryContenxt";

const formSchema = z
  .object({
    grup: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    description: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    value_un: z.string(),
    state: z.string(),
    marca: z.string(),
    model: z.string(),
    department: z.string(),
    quantity: z.string(),
    unit: z.string(),
    date_buy: z.coerce
      .date()
      .max(new Date(), { message: "Data superior a data atual" }),
    date_end: z.coerce.date(),
  })
  .refine((fields) => fields.date_end > fields.date_buy, {
    path: ["date_end"],
    message: "Data menor que a data de compra",
  });

export type formSchemaType = typeof formSchema;

export function NewItemForm() {
  const { createNewItem } = useContext(InventoryContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function handleSubmitForm(values: z.infer<typeof formSchema>) {
    createNewItem(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        className="space-y-8 flex flex-col items-center "
      >
        <div className="flex gap-4 w-full">
          <div className="w-2/4">
            <div className="flex flex-col gap-2 ">
              <FormField
                control={form.control}
                name="grup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span>Grupo</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o grupo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Impressora">Impressora</SelectItem>
                        <SelectItem value="Periferico">Periferico</SelectItem>
                        <SelectItem value="Monitor">Monitor</SelectItem>
                        <SelectItem value="Memoria Ram">Memoria Ram</SelectItem>
                        <SelectItem value="Processador">Processador</SelectItem>
                        <SelectItem value="Placa de video">Placa de video</SelectItem>
                        <SelectItem value="SSD/HDD">SSD/HDD</SelectItem>
                        <SelectItem value="Câmeras">Câmeras</SelectItem>
                        <SelectItem value="Cabos">Cabos</SelectItem>
                        <SelectItem value="Outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <InputDialog
                nameInput="marca"
                label="Marca"
                controlInput={form.control}
                type="text"
              />
              <InputDialog
                nameInput="model"
                label="Modelo"
                controlInput={form.control}
                type="text"
              />

              <InputDialog
                nameInput="description"
                label="Descrição"
                controlInput={form.control}
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <InputDialog
                nameInput="quantity"
                label="Quantidade"
                controlInput={form.control}
                type="number"
              />

              <InputDialog
                nameInput="value_un"
                label="Valor unitario"
                controlInput={form.control}
                type="number"
              />
            </div>

            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <span>Estado</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o estado" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Pessimo">Pessimo</SelectItem>
                        <SelectItem value="Ruim">Ruim</SelectItem>
                        <SelectItem value="Bom">Bom</SelectItem>
                        <SelectItem value="Muito Bom">Muito Bom</SelectItem>
                        <SelectItem value="Excelente">Excelente</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <span>Departamento</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Administrativo">
                          Administrativo
                        </SelectItem>
                        <SelectItem value="Orçamento">Orçamento</SelectItem>
                        <SelectItem value="Dep Tecnico">Dep Tecnico</SelectItem>
                        <SelectItem value="Qualidade">Qualidade</SelectItem>
                        <SelectItem value="Produção">Produção</SelectItem>
                        <SelectItem value="Recebimento">Recebimento</SelectItem>
                        <SelectItem value="Financeiro">Financeiro</SelectItem>
                        <SelectItem value="Expedição">Expedição</SelectItem>
                        <SelectItem value="R.H">R.H</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="unit"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <span>Unidade</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Woodpel">Woodpel</SelectItem>
                        <SelectItem value="Life">Life</SelectItem>
                        <SelectItem value="Woodflex">Woodflex</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2">
              <InputDialog
                nameInput="date_buy"
                label="Data compra"
                controlInput={form.control}
                type="date"
              />
              <InputDialog
                nameInput="date_end"
                label="Data final"
                controlInput={form.control}
                type="date"
              />
            </div>
          </div>
        </div>
        <Textarea placeholder="Anotações..." />
        <Button type="submit" className="text-white">
          Cadastrar
        </Button>
      </form>
    </Form>
  );
}
