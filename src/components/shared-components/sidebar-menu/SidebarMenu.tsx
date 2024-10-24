import { Separator } from "@/components/ui/separator";
import { SidebarMenuItem } from "../sidebar-menu-item/SidebarMenuItem";
import { SIDEBAR_MENU_NAV_ITEMS } from "@/lib/constants";
import { Nomencaltors } from "../nomenclators/Nomenclators";

export const SidebarMenu = () => {
  return (
    <>
      <div className="flex flex-col gap-1 w-full">
        {SIDEBAR_MENU_NAV_ITEMS.map((item) => (
          <SidebarMenuItem item={item} key={item.title} />
        ))}
      </div>

      <Separator className="my-4" />

      <Nomencaltors />
    </>
  );
};
