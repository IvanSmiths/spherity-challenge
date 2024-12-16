import Header from "@/components/home/header";
import { Database } from "lucide-react";
import { Accordion } from "./accordion";
import { BatteryData } from "@/types/types";

type BatteryAccordionWrapperProps = {
  battery: BatteryData[];
};

export default function AccordionWrapper({
  battery,
}: BatteryAccordionWrapperProps) {
  return (
    <>
      <Header title="More Data" icon={Database} />
      <Accordion label="Proof" data={battery[1].proof} />
      <Accordion
        label="Battery Cell Scan"
        data={battery[0].credentialSubject.CTScans.batteryCellScan}
      />
      <Accordion
        label="Housing and Cathode"
        data={battery[0].credentialSubject.CTScans.housingAndTheCathode}
      />{" "}
      <Accordion
        label="Cathode and Anode"
        data={battery[0].credentialSubject.CTScans.casingCathodeAndAnode}
      />
    </>
  );
}