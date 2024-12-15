import { FormattedDate } from "@/lib/formatDate";
import { BatteryInfo } from "./batteryInfo";
import { BatteryData } from "@/types/types";

type BatteryInfoWrapperProps = {
  battery: BatteryData[];
};

export default function BatteryInfoWrapper({
  battery,
}: BatteryInfoWrapperProps) {
  return (
    <BatteryInfo
      type={battery[1].type[1]}
      issuanceDate={<FormattedDate date={battery[1].issuanceDate} />}
      ratedCapacity={battery[1].credentialSubject.ratedCapacity}
      voltageMaximum={battery[1].credentialSubject.voltageMaximum}
      voltageNominal={battery[1].credentialSubject.voltageNominal}
      lifeCycleStatus={battery[1].credentialSubject.lifeCycleStatus}
    />
  );
}
