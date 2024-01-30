
import { Control, useFormContext } from "react-hook-form";
import { z } from "zod";
import { formSchemaType } from "./NewItemForm";
import { FormControl, FormField, FormItem } from "../../../../../components/ui/form";
import { Input } from "../../../../../components/ui/input";

type ControlInputTypes = "grup" | "description" | "quantity" | "value_un" | "state" | "marca" | "model" | "department" | "unit" | "date_buy" | "date_end"

interface InputDialog {
    nameInput: ControlInputTypes,
    label: string,
    controlInput: Control<z.infer<formSchemaType>>
    type: string,
    placeholder?: string
}

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function InputDialog({nameInput,label,placeholder,controlInput, type}: InputDialog) {
   const { register, formState } = useFormContext()

   const { errors } = formState as unknown as ErrorsType

    return (
        <FormField
            name={nameInput}
            control={controlInput}
            render={() => (
              <FormItem className="w-full">
                <label className="text-sm text-zinc-500">{label}</label>
                <FormControl>
                  <Input placeholder={placeholder} {...register(nameInput)} type={type} className={`text-zinc-400 ${errors[nameInput]?.message && 'border-red-500'}`} />
                </FormControl>
         
              </FormItem>
            )}
          />
    )
}