import { useContext } from "react";
import { columns } from "./Columns";
import { DataTableInventory } from "./DataTable";
import { InventoryContext } from "../../../../contexts/InventoryContenxt";

export function TableInventory() {
  const { items } = useContext(InventoryContext);

  return <DataTableInventory columns={columns} data={items} />;
}
