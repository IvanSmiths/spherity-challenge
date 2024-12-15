import { BarChart } from "@/components/ui/charts/bar-chart";
import { Material } from "@/types/types";
import Header from "@/components/home/header";
import { Atom } from "lucide-react";

type BatteryChartsProps = {
  activeMaterials: Material[];
  electrolyteComposition: Material[];
};

export function BatteryCharts({
  activeMaterials,
  electrolyteComposition,
}: BatteryChartsProps) {
  return (
    <>
      <Header title="Charts" icon={Atom} />
      <div className="flex flex-col gap-5 xl:flex-row">
        <BarChart label="Active Materials" chartData={activeMaterials} />
        <BarChart
          label="Electrolyte Composition"
          chartData={electrolyteComposition}
        />
      </div>
    </>
  );
}
