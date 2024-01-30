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
                        <SelectItem value="impressora">Impressora</SelectItem>
                        <SelectItem value="periferico">Periferico</SelectItem>
                        <SelectItem value="monitor">Monitor</SelectItem>
                        <SelectItem value="memoria ram">Memoria Ram</SelectItem>
                        <SelectItem value="processador">Processador</SelectItem>
                        <SelectItem value="ssd/hdd">SSD/HDD</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
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
                        <SelectItem value="terrible">Pessimo</SelectItem>
                        <SelectItem value="bad">Ruim</SelectItem>
                        <SelectItem value="good">Bom</SelectItem>
                        <SelectItem value="very_good">Muito Bom</SelectItem>
                        <SelectItem value="great">Excelente</SelectItem>
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
                        <SelectItem value="budget">Orçamento</SelectItem>
                        <SelectItem value="technician">Dep Tecnico</SelectItem>
                        <SelectItem value="quality">Qualidade</SelectItem>
                        <SelectItem value="production">Produção</SelectItem>
                        <SelectItem value="receipt">Recebimento</SelectItem>
                        <SelectItem value="financial">Financeiro</SelectItem>
                        <SelectItem value="expedition">Expedição</SelectItem>
                        <SelectItem value="rh">R.H</SelectItem>
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
                        <SelectItem value="woodpel">Woodpel</SelectItem>
                        <SelectItem value="life">Life</SelectItem>
                        <SelectItem value="woodflex">Woodflex</SelectItem>
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
