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
        <CardTitle className="text-xl">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChartRecharts accessibilityLayer data={chartData}>
            <defs>
              <linearGradient id="fillActive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1a3fe6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1a3fe6" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillElect" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6f88e6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6f88e6" stopOpacity={0.1} />
              </linearGradient>
            </defs>
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
              fill="url(#fillActive)"
              stroke="#1a3fe6"
              fillOpacity={0.8}
            />
            <Area
              dataKey="materialPercentageMassFraction"
              type="natural"
              fill="url(#fillElect)"
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
