import { BatteryData } from "@/types/types";
import { BatteryMaterials } from "./batteryMaterials";

type BatteryMaterialsWrapperProps = {
  battery: BatteryData[];
};

function BatteryMaterialsWrapper({ battery }: BatteryMaterialsWrapperProps) {
  return (
    <BatteryMaterials
      activeMaterials={
        battery[1].credentialSubject.cellChemistry.anodeActiveMaterials
      }
      electrolyteComposition={
        battery[1].credentialSubject.cellChemistry.electrolyteComposition
      }
    />
  );
}

export default BatteryMaterialsWrapper;