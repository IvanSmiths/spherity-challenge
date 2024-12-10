import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <CardTitle>{description}</CardTitle>
        <CardDescription className="font-bold">{title}</CardDescription>
      </CardHeader>
    </Card>
  );
}
