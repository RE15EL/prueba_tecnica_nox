import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SIDEBAR_MENU_NOMENCLATORS_ITEMS } from "@/lib/constants";
import { ChevronRight } from "lucide-react";

export const Nomencaltors = () => {
  return (
    <div className="">
      <h2 className="font-bold text-[16px] text-[#737791]">Nomencaltors</h2>

      <div className="mt-2 gap-1">
        {SIDEBAR_MENU_NOMENCLATORS_ITEMS.map((item) => (
          <Collapsible key={item.title}>
            <CollapsibleTrigger className="flex justify-start items-center gap-4 text-[#A0AEC0] font-bold w-[229px] py-4 px-6 bg-transparent">
              <ChevronRight />
              <span>{item.title}</span>
            </CollapsibleTrigger>
            <CollapsibleContent>{/* SubItems here */}</CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};
