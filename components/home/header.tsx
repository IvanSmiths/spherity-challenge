import { LucideIcon } from "lucide-react";

type HeaderProps = {
  icon: LucideIcon;
  title: string;
  isInFirstSection?: boolean;
};

export default function Header({
  icon: Icon,
  title,
  isInFirstSection,
}: HeaderProps) {
  return (
    <div
      className={`${isInFirstSection ? "mt-5" : "mt-20"} flex items-center gap-2`}
    >
      <Icon className="h-7 w-7" />
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
}
