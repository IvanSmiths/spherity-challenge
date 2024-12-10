"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Material } from "@/types/materialTypes";

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
