"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useOrdersStore } from "@/store";
import { DrawingPinFilledIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export const ViewResults = () => {
  const view = useOrdersStore((state) => state.view);
  const setView = useOrdersStore((state) => state.setView);

  const [viewOrders, setViewOrders] = useState(view);

  useEffect(() => {
    setViewOrders(view);
  }, [view]);

  const handleToggle = (newView:string) => {
    if (newView) setView(newView);
  };

  return (
    <div className="h-[54px] w-[116px] flex justify-center items-center gap-0">
      <ToggleGroup
        type="single"
        className="size-full p-0 border-[#EDF2F7] overflow-hidden"
        value={viewOrders}
        onValueChange={(value) => handleToggle(value)}
      >
        <ToggleGroupItem
          variant="outline"
          value="list"
          aria-label="Toggle view to list"
          className="size-full border-[#E2E8F0] rounded-s-[16px] hover:bg-[#EDF2F7]"
        >
          <HamburgerMenuIcon className="h-5 w-5" />
        </ToggleGroupItem>

        <ToggleGroupItem
          variant="outline"
          value="map"
          aria-label="Toggle vie to map"
          className="size-full border-[#E2E8F0] rounded-e-[16px]"
        >
          <DrawingPinFilledIcon className="h-5 w-5" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
