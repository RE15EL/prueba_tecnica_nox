"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export const BreadcrumbWithCustomSeparator = () => {
  const pathname = usePathname();
  const page = pathname.at(1)?.toUpperCase() + pathname.slice(2);
  console.log({ pathname, page });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathname !== "/" && (
          <BreadcrumbItem>
            <BreadcrumbLink href={`${pathname}`}>{page}</BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {/* <BreadcrumbSeparator /> */}
        {/* <BreadcrumbItem>
          <BreadcrumbPage>Summary</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
