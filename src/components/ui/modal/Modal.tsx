"use client";

import { ReactNode, useState } from "react";
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
}

export const Modal = ({ title, desc, children }: Props) => {
  const [open, setOpen] = useState(false);

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
