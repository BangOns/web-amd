import { cn } from "@/lib/utils";
import { icons } from "lucide-react";

const Icons = ({
  name,
  className,
}: {
  name: keyof typeof icons;
  className?: string;
}) => {
  const LucideIcon = icons[name];

  return <LucideIcon className={cn(className)} />;
};

export default Icons;
