import { BarChart } from "@/components/ui/charts/bar-chart";
import { Material } from "@/types/materialTypes";

interface BatteryChartsProps {
  activeMaterials: Material[];
  electrolyteComposition: Material[];
}

export function BatteryCharts({
  activeMaterials,
  electrolyteComposition,
}: BatteryChartsProps) {
  return (
    <div className="flex gap-5">
      <BarChart label="Active Materials" chartData={activeMaterials} />
      <BarChart
        label="Electrolyte Composition"
        chartData={electrolyteComposition}
      />
    </div>
  );
}
