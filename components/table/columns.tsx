"use client";

import { ColumnDef, HeaderContext } from "@tanstack/react-table";
import { Material } from "@/types/materialTypes";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Material>[] = [
  {
    accessorKey: "materialName",
    header: ({ column }: HeaderContext<Material, unknown>) => {
      return (
        <Button
          variant="ghost"
          onClick={(): void =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "materialWeight",
    header: ({ column }: HeaderContext<Material, unknown>) => {
      return (
        <Button
          variant="ghost"
          onClick={(): void =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
        >
          Weight
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "materialPercentageMassFraction",
    header: ({ column }: HeaderContext<Material, unknown>) => {
      return (
        <Button
          variant="ghost"
          onClick={(): void =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
        >
          Percentage Mass Fraction
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
