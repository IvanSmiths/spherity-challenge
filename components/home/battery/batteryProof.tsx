import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CardTable from "@/components/ui/cards/card-table";
import { Proof } from "@/types/materialTypes";

interface BatteryProofProps {
  proof: Proof;
}

export function BatteryProof({ proof }: BatteryProofProps) {
  return (
    <div className="flex flex-col gap-5">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Proof</AccordionTrigger>
          <AccordionContent>
            <CardTable content={proof} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
} 