"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Material } from "@/types/materialTypes";
import { columnHeader } from "@/components/table/columnHeader";

export const columns: ColumnDef<Material>[] = [
  {
    accessorKey: "materialName",
    header: columnHeader("Name"),
  },
  {
    accessorKey: "materialWeight",
    header: columnHeader("Weight"),
  },
  {
    accessorKey: "materialPercentageMassFraction",
    header: columnHeader("Percentage Mass Fraction"),
  },
];
