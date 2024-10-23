import { cn } from "@/lib/utils";
import { FilterStatus } from "./FilterStatus";
import { ViewResults } from "./ViewResults";

interface Props {
  classes?: string;
}

export const Filters = ({ classes }: Props) => {
  
  return (
    <div
      className={cn("w-full flex flex-row-reverse items-center gap-5", classes)}
    >
      <ViewResults />
      <FilterStatus />
    </div>
  );
};
