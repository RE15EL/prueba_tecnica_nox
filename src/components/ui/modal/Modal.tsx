"use client";

import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  children: ReactNode;
  title: string;
  desc?: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ title, desc, children, open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {desc && <DialogDescription> {desc}</DialogDescription>}
        </DialogHeader>
        <div> {children} </div>
      </DialogContent>
    </Dialog>
  );
};
