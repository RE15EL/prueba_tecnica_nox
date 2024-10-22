import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { DrawingPinFilledIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";

export const ViewResults = () => {
  return (
    <div className="h-[54px] w-[116px] flex justify-center items-center">
      <ToggleGroup type="single" className="size-full p-0 bg-emerald-50 rounded-[16px]">
        <ToggleGroupItem value="bold" aria-label="Toggle bold" className="size-full">
          <HamburgerMenuIcon className="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem variant='outline' value="italic" aria-label="Toggle italic" className="size-full">
          <DrawingPinFilledIcon className="h-4 w-4" />
        </ToggleGroupItem>        
      </ToggleGroup>
    </div>
  );
};
