"use client";

import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  XAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/charts/chart";
import { Material } from "@/types/materialTypes";

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
  console.log(chartData);

  return (
    <>
      <h2>{label}</h2>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <RechartsBarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="materialName"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
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
    </>
  );
}
