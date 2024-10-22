"use client";

import Link from "next/link";
import Image from "next/image";
import { NAVBAR_ACTIONS_ITEMS } from "@/lib/constants";

export const NavbarActions = () => {
  return (
    <div className="flex ">
      {NAVBAR_ACTIONS_ITEMS.map(({ title, image }) => (
        <Link
          href="#"
          key={title}
          className="rounded-full w-12 h-1w-12 overflow-hidden flex justify-center items-center gap-2.5"
        >
          <Image 
            src={`/images/${image}`} 
            alt={title} 
            width={60} 
            height={60} />
        </Link>
      ))}
    </div>
  );
};
