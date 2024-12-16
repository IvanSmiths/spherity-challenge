import CardTable from "@/components/ui/cards/card-table";
import { KeyValuePair } from "@/types/types";
import Header from "@/components/home/header";
import { ChartBarIncreasing } from "lucide-react";

type BatteryMetricsProps = {
  performanceMetrics: KeyValuePair;
  safetyDurabilityTests: KeyValuePair;
  temperatureToleranceTests: KeyValuePair;
  batteryCellHomologation: KeyValuePair;
};

export function Metrics({
  performanceMetrics,
  safetyDurabilityTests,
  temperatureToleranceTests,
  batteryCellHomologation,
}: BatteryMetricsProps) {
  return (
    <>
      <Header title="Performance Metrics" icon={ChartBarIncreasing} />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 xl:flex-row">
          <CardTable title="Performance Metrics" content={performanceMetrics} />
          <CardTable
            title="Safety Durability Tests"
            content={safetyDurabilityTests}
          />
        </div>
        <div className="flex flex-col gap-5 xl:flex-row">
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
    </>
  );
}
