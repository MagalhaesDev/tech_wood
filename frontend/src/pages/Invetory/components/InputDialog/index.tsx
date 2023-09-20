import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../components/ui/form";


interface InputDialog {
    nameInput: string,
    label: string,
    placeholder?: string
}

export function InputDialog({nameInput,label,placeholder}: InputDialog) {

    return (
        <FormField
            name={nameInput}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input  {...field} placeholder={placeholder}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
    )
}