import { Badge } from "@/components/ui/badge";
import { FILTER_STATUS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const FilterStatus = () => {
  return (
    <div className="flex items-center gap-2">
      {FILTER_STATUS.map(({ label, variant, classes }) => (
        <Badge
          variant={variant}
          key={label}
          className={cn(
            "text-[12px] rounded-sm font-bold px-1.5 py-0 hover:cursor-pointer",
            classes
          )}
        >
          {label}
        </Badge>
      ))}
    </div>
  );
};
