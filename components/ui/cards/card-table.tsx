import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/cards/card";
import { KeyValuePair } from "@/types/types";

type CardContainerProps = {
  title?: string;
  description?: string;
  content: KeyValuePair;
};

export default function CardTable({
  content,
  title,
  description,
}: CardContainerProps) {
  return (
    <Card className="w-full overflow-hidden" dimensions="wide">
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          {Object.entries(content).map(([key, value]) => (
            <div key={key} className="flex items-center p-1 odd:bg-muted/35">
              <span className="min-w-60 text-sm text-foreground/50 md:text-base">
                {key}
              </span>
              <div className="min-w-20 max-w-[42px] text-nowrap text-left text-sm md:text-base">
                <span className="h-6">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
