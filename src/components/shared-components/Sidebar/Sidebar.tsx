import { ScrollArea } from "@/components/ui/scroll-area";
import { Logo } from "../Logo/Logo";
import { SidebarMenu } from "../sidebar-menu/SidebarMenu";

export const Sidebar = () => {
  return (
    <div className="min-h-screen px-4 bg-white border flex flex-col">
      <div className="flex justify-center py-4 border">
        <Logo />
      </div>

      <div className="grow flex justify-center mt-8 border">
        <ScrollArea className="h-[560px] w-full rounded-md border p-4">
          <SidebarMenu />
        </ScrollArea>
      </div>
    </div>
  );
};
