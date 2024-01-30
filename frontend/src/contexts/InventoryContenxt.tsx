import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";

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

  useEffect(() => {
    api
      .get("http://localhost:3333/inventorys")
      .then((response) => setItems(response.data));
  }, []);

  function createNewItem (item: CreateNewItem)  {
    api.post("http://localhost:3333/inventorys", item);

    window.location.reload();
  }


  return (
    <InventoryContext.Provider value={{ items, createNewItem }}>{children}</InventoryContext.Provider>
  );
}
