import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { DrawingPinFilledIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";

export const ViewResults = () => {
  return (
    <div className="h-[54px] w-[116px] flex justify-center items-center gap-0">
      <ToggleGroup
        type="single"
        className="size-full p-0 border-[#EDF2F7] overflow-hidden"
      >
        <ToggleGroupItem
          variant="outline"
          value="order view"
          aria-label="Toggle view"
          className="size-full border-[#E2E8F0] rounded-s-[16px] hover:bg-[#EDF2F7]"
        >
          <HamburgerMenuIcon className="h-5 w-5" />
        </ToggleGroupItem>

        <ToggleGroupItem
          variant="outline"
          value="map"
          aria-label="Toggle map"
          className="size-full border-[#E2E8F0] rounded-e-[16px]"
        >
          <DrawingPinFilledIcon className="h-5 w-5" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
