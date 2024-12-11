import { DataTable } from "@/components/ui/table/data-table";
import { materialsColumns } from "@/components/ui/table/columns";
import { Material } from "@/types/types";
import Header from "@/components/home/header";
import { Atom } from "lucide-react";
import React from "react";

interface BatteryMaterialsProps {
  activeMaterials: Material[];
  electrolyteComposition: Material[];
}

export function BatteryMaterials({
  activeMaterials,
  electrolyteComposition,
}: BatteryMaterialsProps) {
  return (
    <>
      <Header title="Materials" icon={Atom} />
      <div className="flex flex-col gap-5">
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
    </>
  );
}
