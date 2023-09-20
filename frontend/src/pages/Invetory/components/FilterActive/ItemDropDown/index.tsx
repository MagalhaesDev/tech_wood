import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";

interface ItemDropDownProps {
  type: string
}

export function ItemDropDown({type}: ItemDropDownProps) {
    return (
        <Menubar >
          <MenubarMenu>
            <MenubarTrigger className="rounded-none cursor-pointer">{type}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem className="cursor-pointer hover:bg-zinc-800 transition ease-in 2s">Informática</MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="cursor-pointer hover:bg-zinc-800 transition ease-in 2s">Acessório</MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="cursor-pointer hover:bg-zinc-800 transition ease-in 2s">Mesa</MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="cursor-pointer hover:bg-zinc-800 transition ease-in 2s">Objeto</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
    )
}