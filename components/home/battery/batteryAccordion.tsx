import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CardTable from "@/components/ui/cards/card-table";

type BatteryAccordionProps = {
  data: { [key: string]: string };
  label: string;
};

export function BatteryAccordion({ data, label }: BatteryAccordionProps) {
  return (
    <div id={label} className="flex flex-col gap-5">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{label}</AccordionTrigger>
          <AccordionContent>
            <CardTable content={data} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
