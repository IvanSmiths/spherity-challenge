import { BatteryCharts } from "./batteryCharts";
import { BatteryData } from "@/types/types";

type BatteryChartsWrapperProps = {
  battery: BatteryData[];
};

export default function BatteryChartsWrapper({
  battery,
}: BatteryChartsWrapperProps) {
  return (
    <BatteryCharts
      activeMaterials={
        battery[1].credentialSubject.cellChemistry.anodeActiveMaterials
      }
      electrolyteComposition={
        battery[1].credentialSubject.cellChemistry.electrolyteComposition
      }
    />
  );
}
