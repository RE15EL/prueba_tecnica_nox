"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ISidebarMenuItem } from "@/types";
import { RxDashboard } from "react-icons/rx";
import {
  IoDocumentTextOutline,
  IoBookOutline,
  IoGameControllerOutline,
  IoFileTrayStackedOutline,
  IoGiftOutline,
} from "react-icons/io5";
import { FiImage } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";

interface Props {
  item: ISidebarMenuItem;
}

export const SidebarMenuItem = ({ item }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={`/${item.href}`}
      className={cn(
        "max-w-[229px] py-2 md:py-4 px-2 md:px-6 bg-transparent rounded-[16px] font-bold text-[#A0AEC0] transition-all hover:text-[#FF7500] hover:bg-[#FFF9EC] flex items-center md:gap-4",
        {
          "text-[#FF7500] bg-[#FFF9EC]": pathname.startsWith(`/${item.href}`),
        }
      )}
    >
      {item.icon === "dashboard" && (
        <RxDashboard className="h-5 w-5 ml-3 md:ml-0" />
      )}
      {item.icon === "orders" && (
        <IoDocumentTextOutline className="h-5 w-5 ml-3 md:ml-0" />
      )}
      {item.icon === "image" && <FiImage className="h-5 w-5 ml-3 md:ml-0" />}
      {item.icon === "info" && (
        <IoBookOutline className="h-5 w-5 ml-3 md:ml-0" />
      )}
      {item.icon === "notifications" && (
        <IoIosNotificationsOutline className="h-5 w-5 ml-3 md:ml-0" />
      )}
      {item.icon === "game" && (
        <IoGameControllerOutline className="h-5 w-5 ml-3 md:ml-0" />
      )}
      {item.icon === "inventaries" && (
        <IoFileTrayStackedOutline className="h-5 w-5 ml-3 md:ml-0" />
      )}
      {item.icon === "coupons" && (
        <IoGiftOutline className="h-5 w-5 ml-3 md:ml-0" />
      )}
      {item.icon === "shippings" && (
        <MdOutlineLocalShipping className="h-5 w-5 ml-3 md:ml-0" />
      )}

      <span className="hidden md:block"> {item.title}</span>
    </Link>
  );
};
