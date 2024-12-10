import { getBattery } from "@/services/getBattery";
import Header from "@/components/home/header";
import { DataTable } from "@/components/table/data-table";
import { materialsColumns } from "@/components/table/columns";
import { Material, Proof } from "@/types/materialTypes";
import CardTable from "@/components/ui/card-table";
import CardWrapper from "@/components/ui/card-wrapper";

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

  const proof: Proof = battery[1].proof;

  const ratedCapacity: string = battery[1].credentialSubject.ratedCapacity;

  const voltageMaximum: string = battery[1].credentialSubject.voltageMaximum;

  const voltageNominal: string = battery[1].credentialSubject.voltageNominal;

  const issuanceDate: string = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(battery[1].issuanceDate));

  return (
    <div className="flex flex-col gap-5 p-10">
      <Header />
      <div className="flex flex-wrap gap-5">
        <CardWrapper title="Issuance Date" description={issuanceDate} />
        <CardWrapper title="Rated capacity" description={ratedCapacity} />
        <CardWrapper title="Voltage Maximum" description={voltageMaximum} />
        <CardWrapper title="Voltage Nominal" description={voltageNominal} />
      </div>
      <div className="flex gap-10">
        <CardTable title="Proof" content={proof} />
      </div>
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
