'use client'

import { Button } from "../button";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  classes?: string;
  action?: () => void;
}

export const ButtonSpecial = ({ label, classes, action }: Props) => {
  const handleAction = () => {
    if (action) {
      action();
    }
  };

  return (
    <Button
      variant="warning"
      onClick={handleAction}
      className={cn("px-4 rounded-[16px] w-[147px]", classes)}
    >
      {label}
    </Button>
  );
};
