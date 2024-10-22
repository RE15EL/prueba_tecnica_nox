import { NavbarActions } from "@/components/shared-components";
import { Breadcrumb } from "../breadcrumb/Breadcrumb";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-5 py-4 bg-white border">
      {/* logo */}
      <Breadcrumb />
      
      {/* navbar actions */}
      <div className="flex items-center gap-2">
        <NavbarActions />
      </div>
    </nav>
  );
};