import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { DialogHeader } from "../../../components/ui/dialog";
import { Form } from "react-router-dom";
import { FormControl, FormField, FormItem, FormLabel } from "../../../components/ui/form";
import { RadioGroup } from "@radix-ui/react-context-menu";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { Button } from "../../../components/ui/button";

const FormSchema = z.object({
  priority: z.string(),
});

export function AcceptedHelp() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function handleSubmitAcceptedTask(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>
          <h1 className="text-2xl text-green-600">Problema no ERP</h1>
          <h2 className="py-2 text-sm">
            Mateus <span>- Desenvolvimento</span>
          </h2>
        </DialogTitle>
        <DialogDescription>
          Problema na hora de acessar a propriedade cliente no pcboot, gostaria
          que voce desse prioridade pois preciso cadastrar essa ft logo.
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
                        <RadioGroupItem value="low" />
                      </FormControl>
                      <FormLabel className="font-normal">Baixa</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="average" />
                      </FormControl>
                      <FormLabel className="font-normal">Media</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="high" />
                      </FormControl>
                      <FormLabel className="font-normal">Alta</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="urgent" />
                      </FormControl>
                      <FormLabel className="font-normal">Urgente</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex gap-3">
            <DialogClose asChild>
              <Button type="button" className="bg-red-500 text-white hover:bg-red-700">
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
