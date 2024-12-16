"use client";

import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/charts/chart";
import { Material } from "@/types/types";

const chartConfig = {
  materialWeight: {
    label: "Weight",
  },
  materialPercentageMassFraction: {
    label: "Percentage Mass Fraction",
  },
} satisfies ChartConfig;

export function BarChart({
  chartData,
  label,
}: {
  chartData: Material[];
  label: string;
}) {
  return (
    <div id={`${label}Chart`} className="relative w-full">
      <h2 className="text-lg font-bold">{label}</h2>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <RechartsBarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="materialName" tickLine={true} tickMargin={10} />
          <YAxis tickLine={true} tickMargin={10} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="materialWeight" fill="#1a3fe6" radius={4} />
          <Bar
            dataKey="materialPercentageMassFraction"
            fill="#6f88e6"
            radius={4}
          />
        </RechartsBarChart>
      </ChartContainer>
    </div>
  );
}
