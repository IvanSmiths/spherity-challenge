import { Material } from "@/types/types";
import { HeaderContext } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export const columnHeader = (title: string) => {
  const HeaderComponent = ({ column }: HeaderContext<Material, unknown>) => (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );

  HeaderComponent.displayName = `HeaderComponent(${title})`;

  return HeaderComponent;
};
