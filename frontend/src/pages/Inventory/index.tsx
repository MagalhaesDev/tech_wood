import { useContext } from "react";
import { DataTableInventory } from "./components/TableInventory/DataTable";
import { columns } from "./components/TableInventory/Columns";
import { InventoryContext } from "../../contexts/InventoryContenxt";

export function Inventory() {
  const { items } = useContext(InventoryContext);

  return (
    <div>
      <h2 className="my-10 text-center text-xl text-green-400">Inventário de T.I</h2>
      <DataTableInventory columns={columns} data={items} />
    </div>
  );
}
