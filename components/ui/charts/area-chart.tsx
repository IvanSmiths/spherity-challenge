"use client";

import {
  Area,
  AreaChart as AreaChartRecharts,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/cards/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./chart";
import { Material } from "@/types/types";

const chartConfig = {
  materialWeight: {
    label: "Weight",
  },
  materialPercentageMassFraction: {
    label: "Percentage Mass Fraction",
  },
} satisfies ChartConfig;

export function AreaChart({
  chartData,
  label,
}: {
  chartData: Material[];
  label: string;
}) {
  return (
    <Card dimensions="wide" className="h-full">
      <CardHeader>
        <CardTitle>{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChartRecharts accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="materialName"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis height={200} dataKey="materialWeight" tickLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="materialWeight"
              type="natural"
              fill="#1a3fe6"
              stroke="#1a3fe6"
              fillOpacity={0.8}
            />
            <Area
              dataKey="materialPercentageMassFraction"
              type="natural"
              fill="#6f88e6"
              stroke="#6f88e6"
              fillOpacity={0.8}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChartRecharts>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
