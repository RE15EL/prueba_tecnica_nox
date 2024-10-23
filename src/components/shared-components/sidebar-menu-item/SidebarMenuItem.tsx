"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ISidebarMenuItem } from "@/types";
import {
  BackpackIcon,
  BellIcon,
  DashboardIcon,
  FileTextIcon,
  ImageIcon,
  MixIcon,
} from "@radix-ui/react-icons";

interface Props {
  item: ISidebarMenuItem;
}

export const SidebarMenuItem = ({ item }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.href}
      className={cn(
        "w-[229px] py-2 md:py-4 md:px-6 bg-transparent rounded-[16px] font-bold text-[#A0AEC0] transition-all hover:text-[#FF7500] hover:bg-[#FFF9EC] flex items-center md:gap-4",
        {
          "text-[#FF7500] bg-[#FFF9EC]": pathname.startsWith(`/${item.href}`),
        }
      )}
    >
      {item.icon === 'dashboard' &&<DashboardIcon className="h-5 w-5 ml-3 md:ml-0"/>}
      {item.icon === 'orders' &&<FileTextIcon className="h-5 w-5 ml-3 md:ml-0"/>}
      {item.icon === 'image' &&<ImageIcon className="h-5 w-5 ml-3 md:ml-0"/>}
      {item.icon === 'info' &&<ImageIcon className="h-5 w-5 ml-3 md:ml-0"/>}
      {item.icon === 'notifications' &&<BellIcon className="h-5 w-5 ml-3 md:ml-0"/>}
      {item.icon === 'game' &&<MixIcon className="h-5 w-5 ml-3 md:ml-0"/>}
      {item.icon === 'inventaries' &&<MixIcon className="h-5 w-5 ml-3 md:ml-0"/>}
      {item.icon === 'coupons' &&<BackpackIcon className="h-5 w-5 ml-3 md:ml-0"/>}
      {item.icon === 'shippings' &&<BackpackIcon className="h-5 w-5 ml-3 md:ml-0"/>}
      
      <span className="hidden md:block"> {item.title}</span>
    </Link>
  );
};
