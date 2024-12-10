import { getBattery } from "@/services/getBattery";
import Header from "@/components/home/header";
import { DataTable } from "@/components/table/data-table";
import { materialsColumns } from "@/components/table/columns";
import { Material } from "@/types/materialTypes";

export default async function Home() {
  let battery = null;
  try {
    battery = await getBattery();
  } catch (error) {
    console.error("Error fetching battery data:", error);
  }

  if (!battery) {
    return <div>Something went wrong on our side. Please notify us.</div>;
  }

  const activeMaterials: Material[] =
    battery[1].credentialSubject.cellChemistry.anodeActiveMaterials;

  const electrolyteComposition: Material[] =
    battery[1].credentialSubject.cellChemistry.electrolyteComposition;

  return (
    <div className="flex flex-col gap-20">
      <Header />
      <div>
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
    </div>
  );
}
