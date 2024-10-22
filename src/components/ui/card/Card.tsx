import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  classes?: string;
  children: ReactNode;
}

export const Card = ({ classes, children }: Props) => {
  return (
    <div className={cn("bg-white p-8 rounded-[20px] shadow-md", classes)}>
      {children}
    </div>
  );
};
