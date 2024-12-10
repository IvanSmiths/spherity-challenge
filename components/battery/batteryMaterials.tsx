import { DataTable } from "@/components/ui/table/data-table";
import { materialsColumns } from "@/components/ui/table/columns";
import { Material } from "@/types/materialTypes";

interface BatteryMaterialsProps {
  activeMaterials: Material[];
  electrolyteComposition: Material[];
}

export function BatteryMaterials({
  activeMaterials,
  electrolyteComposition,
}: BatteryMaterialsProps) {
  return (
    <div className="flex gap-5">
      <DataTable
        title="Active Materials"
        columns={materialsColumns}
        data={activeMaterials}
      />
      <DataTable
        title="Electrolyte Composition"
        columns={materialsColumns}
        data={electrolyteComposition}
      />
    </div>
  );
} 