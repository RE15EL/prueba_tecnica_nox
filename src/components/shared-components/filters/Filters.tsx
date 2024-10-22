import { FilterStatus } from "./FilterStatus";
import { ViewResults } from "./ViewResults";

export const Filters = () => {
  return <div className=" w-full flex flex-row-reverse items-center gap-5">
    <ViewResults/>
    <FilterStatus/>
  </div>;
};
