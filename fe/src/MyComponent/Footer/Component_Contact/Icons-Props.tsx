import { icons } from "lucide-react";

const Icons = ({ name }: { name: keyof typeof icons }) => {
  const LucideIcon = icons[name];

  return <LucideIcon width={30} height={30} className="text-green_amd" />;
};

export default Icons;
