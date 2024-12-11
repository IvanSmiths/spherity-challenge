import CardTable from "@/components/ui/cards/card-table";

interface BatteryMetricsProps {
  performanceMetrics: { [key: string]: string };
  safetyDurabilityTests: { [key: string]: string };
  temperatureToleranceTests: { [key: string]: string };
  batteryCellHomologation: { [key: string]: string };
}

export function BatteryMetrics({
  performanceMetrics,
  safetyDurabilityTests,
  temperatureToleranceTests,
  batteryCellHomologation,
}: BatteryMetricsProps) {
  return (
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
  );
}
