import { NavbarActions } from "@/components/shared-components";
import { BreadcrumbWithCustomSeparator } from "../breadcrumb-custom-separator/BreadcrumbWithCustomSeparator";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-5 py-4 bg-white border">
      <BreadcrumbWithCustomSeparator />
      
      <div className="flex items-center gap-2">
        <NavbarActions />
      </div>
    </nav>
  );
};