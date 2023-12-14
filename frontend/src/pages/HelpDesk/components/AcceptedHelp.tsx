import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <div className="flex gap-2">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                className="bg-red-600 hover:bg-red-800 ease-in transition .2s"
              >
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit">Aceitar</Button>
          </div>
        </form>
      </Form>

      <DialogFooter></DialogFooter>
    </DialogContent>
  );
}
