import { ReactNode } from "react";

export interface ISidebarMenuItem {
  title: string;
  href: string;
  icon: string;
}

export interface ISidebarNomenclatorItem {
  title: string;
  href?: string;
  subitems?: ReactNode;
}
