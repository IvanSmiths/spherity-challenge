import { BatteryCharts } from "./charts";
import { BatteryData } from "@/types/types";

type BatteryChartsWrapperProps = {
  battery: BatteryData[];
};

export default function ChartsWrapper({ battery }: BatteryChartsWrapperProps) {
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
