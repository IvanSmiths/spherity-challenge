import { BatteryInfo } from "@/components/home/battery/batteryInfo";
import { BatteryMaterials } from "@/components/home/battery/batteryMaterials";
import { BatteryCharts } from "@/components/home/battery/batteryCharts";
import { BatteryMetrics } from "@/components/home/battery/batteryMetrics";
import { AppProps } from "@/types/types";
import { FormattedDate } from "@/lib/formatDate";
import BatteryAccordionWrapper from "@/components/home/battery/batteryAccordionWrapper";

export default function App({ battery }: AppProps) {
  return (
    <div className="flex w-full">
      <div className="flex w-full flex-col gap-5 p-10 pt-5">
        <BatteryInfo
          type={battery[1].type[1]}
          issuanceDate={<FormattedDate date={battery[1].issuanceDate} />}
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
        <BatteryAccordionWrapper battery={battery} />
      </div>
    </div>
  );
}
