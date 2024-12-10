import { BatteryCharts } from "@/components/home/battery/batteryCharts";
import { BatteryInfo } from "@/components/home/battery/batteryInfo";
import { BatteryMaterials } from "@/components/home/battery/batteryMaterials";
import { BatteryMetrics } from "@/components/home/battery/batteryMetrics";
import { BatteryAccordion } from "@/components/home/battery/batteryAccordion";
import Header from "@/components/home/header";
import { BreadcrumbWrapper } from "@/components/ui/breadcrumb/breadcrumb-wrapper";
import { getBattery } from "@/services/getBattery";
import { Atom, BatteryFull, ChartBarIncreasing } from "lucide-react";

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

  const issuanceDate: string = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(battery[1].issuanceDate));

  return (
    <div className="flex flex-col gap-5 p-10">
      <BreadcrumbWrapper />
      <Header isInFirstSection title="Battery" icon={BatteryFull} />
      <BatteryInfo
        type={battery[1].type[1]}
        issuanceDate={issuanceDate}
        ratedCapacity={battery[1].credentialSubject.ratedCapacity}
        voltageMaximum={battery[1].credentialSubject.voltageMaximum}
        voltageNominal={battery[1].credentialSubject.voltageNominal}
        lifeCycleStatus={battery[1].credentialSubject.lifeCycleStatus}
      />
      <Header title="Materials" icon={Atom} />
      <BatteryMaterials
        activeMaterials={
          battery[1].credentialSubject.cellChemistry.anodeActiveMaterials
        }
        electrolyteComposition={
          battery[1].credentialSubject.cellChemistry.electrolyteComposition
        }
      />
      <Header title="Charts" icon={Atom} />
      <BatteryCharts
        activeMaterials={
          battery[1].credentialSubject.cellChemistry.anodeActiveMaterials
        }
        electrolyteComposition={
          battery[1].credentialSubject.cellChemistry.electrolyteComposition
        }
      />
      <Header title="Performance Metrics" icon={ChartBarIncreasing} />
      <BatteryMetrics
        performanceMetrics={battery[0].credentialSubject.performanceMetrics}
        safetyDurabilityTests={
          battery[0].credentialSubject.safetyDurabilityTests
        }
        temperatureToleranceTests={
          battery[0].credentialSubject.temperatureToleranceTests
        }
        batteryCellHomologation={
          battery[0].credentialSubject.batteryCellHomologation
        }
      />
      <BatteryAccordion label="Proof" proof={battery[1].proof} />
      <BatteryAccordion
        label="Battery Cell Scan"
        proof={battery[0].credentialSubject.CTScans.batteryCellScan}
      />
      <BatteryAccordion
        label="Housing and Cathode"
        proof={battery[0].credentialSubject.CTScans.housingAndTheCathode}
      />{" "}
      <BatteryAccordion
        label="Cathode and Anode"
        proof={battery[0].credentialSubject.CTScans.casingCathodeAndAnode}
      />
    </div>
  );
}
