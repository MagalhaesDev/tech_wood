import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../../../components/ui/form";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../../components/ui/radio-group";
import { Button } from "../../../../../components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { api } from "../../../../../services/api";
import { useContext } from "react";
import { TasksContext } from "../../../../../contexts/TasksContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../../components/ui/select";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../../../../components/ui/dialog";

const FormSchema = z.object({
  priority: z.string(),
  problem: z.string()
});

interface AcceptedHelpProps {
  columnId: string;
}

export function AcceptedHelp({ columnId }: AcceptedHelpProps) {
  const { tasksPendent } = useContext(TasksContext);

  const taskActually = tasksPendent.find(task => task.id === columnId)

  let dateFormatted;

  if(taskActually) {
    dateFormatted = new Date(taskActually.createDate);
  }


  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: false,
    timeZone: 'America/Sao_Paulo'
  };
  const formattedDate = new Intl.DateTimeFormat("pt-BR", options).format(dateFormatted);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function handleSubmitAcceptedTask(data: z.infer<typeof FormSchema>) {
    const updatePriority = {
      id: columnId,
      priority: data.priority,
      problem: data.problem
    };

    api.put("http://192.168.15.41:3000/tasks/priority", updatePriority);

    window.location.reload();
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>
          <div className="flex items-center gap-8 ">
            <h1 className="text-xl text-green-600">{taskActually?.name}</h1>
            <p className="text-sm text-zinc-400">{formattedDate}</p>
          </div>
        </DialogTitle>
        <DialogDescription>
          {taskActually?.description}
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitAcceptedTask)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Prioridade</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="BAIXA" />
                      </FormControl>
                      <FormLabel className="font-normal">Baixa</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="MEDIA" />
                      </FormControl>
                      <FormLabel className="font-normal">Media</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="ALTA" />
                      </FormControl>
                      <FormLabel className="font-normal">Alta</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="URGENTE" />
                      </FormControl>
                      <FormLabel className="font-normal">Urgente</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="problem"
            render={({ field }) => (
              <FormItem className="w-full ">
                <FormLabel className="flex items-end gap-1">
                  <span>Problema</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o problema..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="WINDOWS">Windows</SelectItem>
                    <SelectItem value="SISTEMA">Sistema ERP</SelectItem>
                    <SelectItem value="PROGRAMAS">Programas</SelectItem>
                    <SelectItem value="HARDWARE">Hardware</SelectItem>
                    <SelectItem value="OUTROS">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <div className="flex gap-3">
            <DialogClose asChild>
              <Button
                type="button"
                className="bg-red-500 text-white hover:bg-red-700"
              >
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit">Aceitar</Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
}
