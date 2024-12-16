import { BatteryData } from "@/types/types";
import { Materials } from "./materials";

type BatteryMaterialsWrapperProps = {
  battery: BatteryData[];
};

function MaterialsWrapper({ battery }: BatteryMaterialsWrapperProps) {
  return (
    <Materials
      activeMaterials={
        battery[1].credentialSubject.cellChemistry.anodeActiveMaterials
      }
      electrolyteComposition={
        battery[1].credentialSubject.cellChemistry.electrolyteComposition
      }
    />
  );
}

export default MaterialsWrapper;