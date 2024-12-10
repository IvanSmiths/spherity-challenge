import { LucideIcon } from "lucide-react";

type HeaderProps = {
  icon: LucideIcon;
  title: string;
};

export default function Header({ icon: Icon, title }: HeaderProps) {
  return (
    <div className="mt-14 flex items-center gap-2">
      <Icon className="h-7 w-7" />
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
}
