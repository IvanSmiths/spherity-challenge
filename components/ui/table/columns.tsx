"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Material } from "@/types/types";
import { columnHeader } from "./columnHeader";

export const materialsColumns: ColumnDef<Material>[] = [
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
    header: columnHeader("Fraction"),
  },
];
