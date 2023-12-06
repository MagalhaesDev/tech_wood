import { api } from "@/services/api";
import { ReactNode, createContext, useEffect, useState } from "react";

export interface Actives {
    id: string,
    category: string,
    locale: string,
    date_buy: string,
    value_buy: string,
    nf: number,
    rate: number,
    description: string,
    provider: string,
    life_util: string,
}

interface ActivesContext {
    actives: Actives[],
    filteredActives: Actives[],
    getUniqueActive: (id?: string) => Actives | undefined;
    searchItem: (searchQuery: string) => void;
}

export const ActivesContext = createContext({} as ActivesContext)

interface ActivesContextProviderProps {
    children: ReactNode
}



export function ActivesContextProvider({
    children,
}: ActivesContextProviderProps) {
    const [actives,setActives] = useState<Actives[]>([]);
    const [filteredActives, setFilteredActives] = useState<Actives[]>([]);

    useEffect(() => {
        api.get("http://localhost:3000/actives").then((response) => setActives(response.data))
    },[]);

    function getUniqueActive(id?: string) {
        return actives.find(active => active.id === id); 
    }

    function searchItem(searchQuery: string) {
      const filteredActives = actives.filter((active) =>
        Object.values(active).some((value) =>
        value.toLowerCase().includes(searchQuery.toLowerCase())
      ));


      setFilteredActives(filteredActives)
    }


    return (
        <ActivesContext.Provider value={{actives, filteredActives, getUniqueActive, searchItem}}>
            {children}
        </ActivesContext.Provider>
    )
}