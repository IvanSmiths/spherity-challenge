import { Badge } from "@/components/ui/badge";
import CardWrapper from "@/components/ui/cards/card-wrapper";
import Header from "@/components/home/header";
import { BatteryFull } from "lucide-react";
import React from "react";

interface BatteryInfoProps {
  type: string;
  issuanceDate: string;
  ratedCapacity: string;
  voltageMaximum: string;
  voltageNominal: string;
  lifeCycleStatus: string;
}

export function BatteryInfo({
  type,
  issuanceDate,
  ratedCapacity,
  voltageMaximum,
  voltageNominal,
  lifeCycleStatus,
}: BatteryInfoProps) {
  return (
    <>
      <Header isInFirstSection title="Battery" icon={BatteryFull} />
      <Badge className="w-fit" variant="secondary">
        Type: {type}
      </Badge>
      <div id="BatteryInfo" className="flex flex-wrap gap-5">
        <CardWrapper title="Issuance Date" description={issuanceDate} />
        <CardWrapper title="Rated capacity" description={ratedCapacity} />
        <CardWrapper title="Voltage Maximum" description={voltageMaximum} />
        <CardWrapper title="Voltage Nominal" description={voltageNominal} />
        <CardWrapper title="Life Cycle Status" description={lifeCycleStatus} />
      </div>
    </>
  );
}
