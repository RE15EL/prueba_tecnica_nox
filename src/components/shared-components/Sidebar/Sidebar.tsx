import { ScrollArea } from "@/components/ui/scroll-area";
import { Logo } from "../Logo/Logo";
import { SidebarMenu } from "../sidebar-menu/SidebarMenu";

export const Sidebar = () => {
  return (
    <div className="min-h-screen p-2 md:px-4 bg-white flex flex-col">
      <div className="flex justify-center py-5 md:py-4">
        <Logo />
      </div>

      <div className="flex-1 flex justify-center mt-8">
        <ScrollArea className="h-[560px] w-full rounded-md p-2 md:p-4">
          <SidebarMenu />
        </ScrollArea>
      </div>
    </div>
  );
};
