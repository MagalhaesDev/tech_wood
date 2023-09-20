import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../components/ui/form";

interface EditInputDialog {
  item: string | number,
  label: string
}

export function EditInputDialog({label, item}: EditInputDialog) {

  return (
    <FormField
      name="teste"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field}  defaultValue={item} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
