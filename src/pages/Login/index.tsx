import { User2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button'
import imgLoginOne from '../../assets/img_login_one.svg'
import imgLoginTwo from '../../assets/img_login_two.svg'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'

export function Login () {
    const form = useForm()

    return (
      <>
        <header className='flex flex-col items-center my-4'>
         <span className='block text-xl '>
                Bem-vindo
         </span>
         <h2 className='text-xl font-bold'>
           
            Ao sistema de monitoramento de ativo fixo
         </h2>
         <h1 className='text-2xl font-bold'>
            <span className='text-green-500'>Wood</span>Actives
         </h1>
        </header>
       <main>
        <div className="flex gap-2 justify-around ">
            <img src={imgLoginOne} alt="Imagem svg" width={280}/>
            <Form {...form}>
            <form  className="space-y-8 border-[.1px] w-1/4 border-gray-300 p-8 rounded-md flex flex-col items-center">
                <User2 className="w-12 h-12"/>

                <h2 className='font-bold'>Account</h2>
              <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Usuário</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu usuário" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    
                  )}
                />

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite sua senha" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">
                    Login
                    <ChevronRight className="w-4 h-4"/>
                </Button>
              </form>
            </Form>
            <img src={imgLoginTwo} alt="Imagem svg" width={280}/>
        </div>
       </main>
      </>
    )
}