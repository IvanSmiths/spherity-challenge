import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheckBig, CircleX } from "lucide-react";

type CardContainerProps = {
  title: string;
  description: string;
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
