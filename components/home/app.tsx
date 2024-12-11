import React from "react";
import Header from "@/components/home/header";
import { Database } from "lucide-react";
import { BatteryInfo } from "@/components/home/battery/batteryInfo";
import { BatteryMaterials } from "@/components/home/battery/batteryMaterials";
import { BatteryCharts } from "@/components/home/battery/batteryCharts";
import { BatteryMetrics } from "@/components/home/battery/batteryMetrics";
import { BatteryAccordion } from "@/components/home/battery/batteryAccordion";
import { AppProps } from "@/types/types";

export default function App({ battery }: AppProps) {
  const issuanceDate: string = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(battery[1].issuanceDate));

  return (
    <div className="flex w-full">
      <div className="flex w-full flex-col gap-5 p-10 pt-5">
        <BatteryInfo
          type={battery[1].type[1]}
          issuanceDate={issuanceDate}
          ratedCapacity={battery[1].credentialSubject.ratedCapacity}
          voltageMaximum={battery[1].credentialSubject.voltageMaximum}
          voltageNominal={battery[1].credentialSubject.voltageNominal}
          lifeCycleStatus={battery[1].credentialSubject.lifeCycleStatus}
        />
        <BatteryMaterials
          activeMaterials={
            battery[1].credentialSubject.cellChemistry.anodeActiveMaterials
          }
          electrolyteComposition={
            battery[1].credentialSubject.cellChemistry.electrolyteComposition
          }
        />
        <BatteryCharts
          activeMaterials={
            battery[1].credentialSubject.cellChemistry.anodeActiveMaterials
          }
          electrolyteComposition={
            battery[1].credentialSubject.cellChemistry.electrolyteComposition
          }
        />
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
        <Header title="More Data" icon={Database} />
        <BatteryAccordion label="Proof" data={battery[1].proof} />
        <BatteryAccordion
          label="Battery Cell Scan"
          data={battery[0].credentialSubject.CTScans.batteryCellScan}
        />
        <BatteryAccordion
          label="Housing and Cathode"
          data={battery[0].credentialSubject.CTScans.housingAndTheCathode}
        />{" "}
        <BatteryAccordion
          label="Cathode and Anode"
          data={battery[0].credentialSubject.CTScans.casingCathodeAndAnode}
        />
      </div>
    </div>
  );
}
