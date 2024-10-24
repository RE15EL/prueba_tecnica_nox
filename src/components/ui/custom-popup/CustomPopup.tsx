"use client";

import { Popover, PopoverContent } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface Props {
  children: ReactNode;
  classes?: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CustomPopup = ({ children, open, setOpen, classes }: Props) => {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverContent className={cn("border border-[#CBD5E0] rounded-[5px] p-2.5", classes)}>
        {children}
      </PopoverContent>
    </Popover>
  );
};
