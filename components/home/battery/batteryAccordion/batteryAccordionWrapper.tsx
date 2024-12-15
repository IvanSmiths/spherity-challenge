import Header from "@/components/home/header";
import { Database } from "lucide-react";
import { BatteryAccordion } from "./batteryAccordion";
import { BatteryData } from "@/types/types";

type BatteryAccordionWrapperProps = {
  battery: BatteryData[];
};

export default function BatteryAccordionWrapper({
  battery,
}: BatteryAccordionWrapperProps) {
  return (
    <>
      <Header title="More Data" icon={Database} />
      <BatteryAccordion label="Proof" data={battery[1].proof} />
      <BatteryAccordion
        label="Battery Cell Scan"
        data={battery[0].credentialSubject.CTScans.batteryCellScan}
      />
      <BatteryAccordion
        label="Housing and Cathode"
        data={battery[0].credentialSubject.CTScans.housingAndTheCathode}
      />{" "}
      <BatteryAccordion
        label="Cathode and Anode"
        data={battery[0].credentialSubject.CTScans.casingCathodeAndAnode}
      />
    </>
  );
}