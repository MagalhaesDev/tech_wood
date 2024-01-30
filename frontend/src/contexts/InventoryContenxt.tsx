import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useLocation } from "react-router-dom";

export interface Items {
  id: string;
  ticket: number;
  description: string; 
  grup: string; 
  marca: string;     
  model: string;  
  quantity: string;
  department: string;  
  state: string;
  unit: string;
  value_un: string;
  date_buy: Date;
  date_end: Date;
}

export interface CreateNewItem extends Omit<Items, 'id' | 'ticket'> {
}


interface InventoryContext {
  items: Items[],
  createNewItem: ((item: CreateNewItem) => void)
}

export const InventoryContext = createContext({} as InventoryContext);

interface InventoryContextProviderProps {
  children: ReactNode;
}

export function InventoryContextProvider({ children }: InventoryContextProviderProps) {
  const [items, setItems] = useState<Items[]>([]);
  let { search } = useLocation();

  if(!search) {
    search = "all"
  }

  useEffect(() => {
    api
      .get(`http://localhost:3333/inventorys${search}`)
      .then((response) => setItems(response.data)); 
  }, [search]);
  

  function createNewItem (item: CreateNewItem)  {
    api.post("http://localhost:3333/inventorys", item);

    window.location.reload();
  }


  return (
    <InventoryContext.Provider value={{ items, createNewItem }}>{children}</InventoryContext.Provider>
  );
}
