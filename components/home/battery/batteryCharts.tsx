import { BarChart } from "@/components/ui/charts/bar-chart";

export function BatteryCharts() {
  return (
    <div className="flex gap-5">
      <BarChart />
      <BarChart />
    </div>
  );
} 