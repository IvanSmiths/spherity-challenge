import { getBattery } from "@/services/getBattery";
import Header from "@/components/home/header";
import { DataTable } from "@/components/table/data-table";
import { materialsColumns } from "@/components/table/columns";
import { Material, Proof } from "@/types/materialTypes";
import CardTable from "@/components/ui/card-table";
import CardWrapper from "@/components/ui/card-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Atom, BarChart, BatteryFull } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbWrapper } from "@/components/ui/breadcrumb-wrapper";

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

  const type: string = battery[1].type[1];

  const ratedCapacity: string = battery[1].credentialSubject.ratedCapacity;

  const voltageMaximum: string = battery[1].credentialSubject.voltageMaximum;

  const voltageNominal: string = battery[1].credentialSubject.voltageNominal;

  const lifeCycleStatus: string = battery[1].credentialSubject.lifeCycleStatus;

  const performanceMetrics = battery[0].credentialSubject.performanceMetrics;

  const safetyDurabilityTests =
    battery[0].credentialSubject.safetyDurabilityTests;

  const batteryCellHomologation =
    battery[0].credentialSubject.batteryCellHomologation;

  const temperatureToleranceTests =
    battery[0].credentialSubject.temperatureToleranceTests;

  const issuanceDate: string = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(battery[1].issuanceDate));

  return (
    <div className="flex flex-col gap-5 p-10">
      <BreadcrumbWrapper />
      <Header isInFirstSection title="Battery" icon={BatteryFull} />
      <Badge className="w-fit" variant="secondary">
        Type: {type}
      </Badge>
      <div className="flex flex-wrap gap-5">
        <CardWrapper title="Issuance Date" description={issuanceDate} />
        <CardWrapper title="Rated capacity" description={ratedCapacity} />
        <CardWrapper title="Voltage Maximum" description={voltageMaximum} />
        <CardWrapper title="Voltage Nominal" description={voltageNominal} />
        <CardWrapper title="Life Cycle Status" description={lifeCycleStatus} />
      </div>
      <Header title="Performance Metrics" icon={BarChart} />
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <CardTable title="Performance Metrics" content={performanceMetrics} />
          <CardTable
            title="Safety Durability Tests"
            content={safetyDurabilityTests}
          />
        </div>
        <div className="flex gap-5">
          <CardTable
            title="Temperature Tolerance Tests"
            content={temperatureToleranceTests}
          />
          <CardTable
            title="Battery Cell Homologation"
            content={batteryCellHomologation}
          />
        </div>
      </div>
      <Header title="Materials" icon={Atom} />
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
      <div className="flex flex-col gap-5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Proof</AccordionTrigger>
            <AccordionContent>
              <CardTable content={proof} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Proof</AccordionTrigger>
            <AccordionContent>
              <CardTable content={proof} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
