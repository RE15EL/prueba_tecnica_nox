"use client";

import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  title: string;
  classes?: string;
  desc?: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ title, desc, children, classes, open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogContent className={cn(classes)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {desc && <DialogDescription> {desc}</DialogDescription>}
        </DialogHeader>
        <div> {children} </div>
      </DialogContent>
    </Dialog>
  );
};
