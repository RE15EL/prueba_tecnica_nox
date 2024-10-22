import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  classes?: string;
}

export const Footer = ({ classes }: Props) => {
  return (
    <footer>
      <p className={cn("text-[#737791] text-sm text-center", classes)}>
        © 2024 VoyPati Made by NOX Creation{" "}
      </p>
    </footer>
  );
};
