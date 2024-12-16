import {
  Accordion as AccordionPrimitive,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CardTable from "@/components/ui/cards/card-table";
import { KeyValuePair } from "@/types/types";

type BatteryAccordionProps = {
  data: KeyValuePair;
  label: string;
};

export function Accordion({ data, label }: BatteryAccordionProps) {
  return (
    <div id={label} className="flex flex-col gap-5">
      <AccordionPrimitive type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{label}</AccordionTrigger>
          <AccordionContent>
            <CardTable content={data} />
          </AccordionContent>
        </AccordionItem>
      </AccordionPrimitive>
    </div>
  );
}
