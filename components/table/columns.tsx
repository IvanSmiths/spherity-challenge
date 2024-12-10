"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Material = {
  materialName: string;
  materialWeight: number;
  materialPercentageMassFraction: number;
};

export const columns: ColumnDef<Material>[] = [
  {
    accessorKey: "materialName",
    header: "Material Name",
  },
  {
    accessorKey: "materialWeight",
    header: "Material Weight",
  },
  {
    accessorKey: "materialPercentageMassFraction",
    header: "Material Perc. Mass Franction",
  },
];
