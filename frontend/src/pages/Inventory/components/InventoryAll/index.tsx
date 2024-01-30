import { useContext } from "react";
import { InventoryContext } from "../../../../contexts/InventoryContenxt";
import { columns } from "../TableInventory/Columns";
import { DataTableInventory } from "../TableInventory/DataTable";

export function InventoryAll() {
  const { items } = useContext(InventoryContext);  

  return (
    <div>
      <h2 className="my-10 text-center text-xl text-green-400">
        Inventário de T.I
      </h2>
      <DataTableInventory columns={columns} data={items} />
    </div>
  );
}
