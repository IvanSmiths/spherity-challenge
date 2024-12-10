import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardContainerProps = {
  title?: string;
  description?: string;
  content: { [key: string]: string };
};

export default function CardTable({
  content,
  title,
  description,
}: CardContainerProps) {
  return (
    <Card className="w-full" dimensions="wide">
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          {Object.entries(content).map(([key, value]) => (
            <div key={key} className="odd:bg-muted/35 flex items-center p-1">
              <span className="text-foreground/50 min-w-60 font-medium">
                {key}
              </span>
              <div className="min-w-20 overflow-hidden overscroll-x-auto text-nowrap text-left">
                <span className="h-6 w-full">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
