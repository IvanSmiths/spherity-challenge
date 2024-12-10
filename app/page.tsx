import { getBattery } from "@/services/getBattery";
import Header from "@/components/home/header";
import { DataTable } from "@/components/table/data-table";
import { columns } from "@/components/table/columns";
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

  const material: Material[] =
    battery[1].credentialSubject.cellChemistry.anodeActiveMaterials;

  return (
    <div className="">
      <Header />
      <DataTable columns={columns} data={material} />
    </div>
  );
}
