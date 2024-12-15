import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/cards/card";
import { CircleCheckBig, CircleX } from "lucide-react";
import { type ReactNode } from "react";

type CardContainerProps = {
  title: string;
  description: string | ReactNode;
};

export default function CardWrapper({
  title,
  description,
}: CardContainerProps) {
  return (
    <Card className="py-3" dimensions="narrow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {description}
          {description === "active" ? (
            <CircleCheckBig color="#22c55e" />
          ) : description === "deactivated" ? (
            <CircleX color="#ef4444" />
          ) : null}
        </CardTitle>
        <CardDescription className="font-bold">{title}</CardDescription>
      </CardHeader>
    </Card>
  );
}
