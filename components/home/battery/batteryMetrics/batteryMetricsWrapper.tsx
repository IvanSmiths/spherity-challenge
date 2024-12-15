import { BatteryMetrics } from "./batteryMetrics";
import { BatteryData } from "@/types/types";

type BatteryMetricsWrapperProps = {
  battery: BatteryData[];
};

function BatteryMetricsWrapper({ battery }: BatteryMetricsWrapperProps) {
  return (
    <BatteryMetrics
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

export default BatteryMetricsWrapper;