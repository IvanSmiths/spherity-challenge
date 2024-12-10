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
    <Card dimensions="narrow">
      <CardHeader>
        <CardTitle>{description}</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
    </Card>
  );
}
