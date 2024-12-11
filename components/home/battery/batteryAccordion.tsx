import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CardTable from "@/components/ui/cards/card-table";
import { Proof } from "@/types/materialTypes";

interface BatteryAccordionProps {
  proof: Proof;
  label: string;
}

export function BatteryAccordion({ proof, label }: BatteryAccordionProps) {
  return (
    <div id={label} className="flex flex-col gap-5">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{label}</AccordionTrigger>
          <AccordionContent>
            <CardTable content={proof} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
