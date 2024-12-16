import { FormattedDate } from "@/lib/format-date";
import { Info } from "./info";
import { BatteryData } from "@/types/types";

type BatteryInfoWrapperProps = {
  battery: BatteryData[];
};

export default function InfoWrapper({ battery }: BatteryInfoWrapperProps) {
  return (
    <Info
      type={battery[1].type[1]}
      issuanceDate={<FormattedDate date={battery[1].issuanceDate} />}
      ratedCapacity={battery[1].credentialSubject.ratedCapacity}
      voltageMaximum={battery[1].credentialSubject.voltageMaximum}
      voltageNominal={battery[1].credentialSubject.voltageNominal}
      lifeCycleStatus={battery[1].credentialSubject.lifeCycleStatus}
    />
  );
}
