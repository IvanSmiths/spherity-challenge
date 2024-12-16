import { Metrics } from "./metrics";
import { BatteryData } from "@/types/types";

type BatteryMetricsWrapperProps = {
  battery: BatteryData[];
};

function MetricsWrapper({ battery }: BatteryMetricsWrapperProps) {
  return (
    <Metrics
      performanceMetrics={battery[0].credentialSubject.performanceMetrics}
      safetyDurabilityTests={battery[0].credentialSubject.safetyDurabilityTests}
      temperatureToleranceTests={
        battery[0].credentialSubject.temperatureToleranceTests
      }
      batteryCellHomologation={
        battery[0].credentialSubject.batteryCellHomologation
      }
    />
  );
}

export default MetricsWrapper;