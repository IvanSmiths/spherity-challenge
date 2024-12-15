import { BatteryData } from "@/types/types";
import BatteryAccordionWrapper from "@/components/home/battery/batteryAccordion/batteryAccordionWrapper";
import BatteryInfoWrapper from "@/components/home/battery/batteryInfo/batteryInfoWrapper";
import BatteryMaterialsWrapper from "@/components/home/battery/batteryMaterials/batteryMaterialsWrapper";
import BatteryChartsWrapper from "@/components/home/battery/batteryCharts/batteryChartsWrapper";
import BatteryMetricsWrapper from "@/components/home/battery/batteryMetrics/batteryMetricsWrapper";

type AppProps = {
  battery: BatteryData[];
};

export default function App({ battery }: AppProps) {
  return (
    <div className="flex w-full">
      <div className="flex w-full flex-col gap-5 p-10 pt-5">
        <BatteryInfoWrapper battery={battery} />
        <BatteryMaterialsWrapper battery={battery} />
        <BatteryChartsWrapper battery={battery} />
        <BatteryMetricsWrapper battery={battery} />
        <BatteryAccordionWrapper battery={battery} />
      </div>
    </div>
  );
}
