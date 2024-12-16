import { BatteryData } from "@/types/types";
import AccordionWrapper from "@/components/home/battery/accordion/accordion-wrapper";
import InfoWrapper from "@/components/home/battery/info/info-wrapper";
import MaterialsWrapper from "@/components/home/battery/materials/materials-wrapper";
import ChartsWrapper from "@/components/home/battery/charts/charts-wrapper";
import MetricsWrapper from "@/components/home/battery/metrics/metrics-wrapper";

type AppProps = {
  battery: BatteryData[];
};

export default function App({ battery }: AppProps) {
  return (
    <div className="flex w-full">
      <div className="flex w-full flex-col gap-5 p-10 pt-5">
        <InfoWrapper battery={battery} />
        <MaterialsWrapper battery={battery} />
        <ChartsWrapper battery={battery} />
        <MetricsWrapper battery={battery} />
        <AccordionWrapper battery={battery} />
      </div>
    </div>
  );
}
