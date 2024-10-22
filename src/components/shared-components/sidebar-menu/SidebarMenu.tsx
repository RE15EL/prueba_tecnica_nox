import { Separator } from "@/components/ui/separator";
import { SidebarMenuItem } from "../sidebar-menu-item/SidebarMenuItem";
import { SIDEBAR_MENU_NAV_ITEMS } from "@/lib/constants";
import { Nomencaltors } from "../nomencaltors/Nomencaltors";

export const SidebarMenu = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-1">
        {SIDEBAR_MENU_NAV_ITEMS.map((item) => (
          <SidebarMenuItem item={item} key={item.title} />
        ))}
      </div>

      <Separator className="my-4" />

      <Nomencaltors/>
    </div>
  );
};
