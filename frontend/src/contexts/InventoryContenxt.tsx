import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface Items {
  description: string; 
  grup: string; 
  marca: string;     
  model: string;  
  quantity: string;  
  state: string;
  unit: string;
  value_un: string;
  date_buy: Date;
  date_end: Date;
}


interface InventoryContext {
  items: Items[]
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


  return (
    <InventoryContext.Provider value={{ items }}>{children}</InventoryContext.Provider>
  );
}
