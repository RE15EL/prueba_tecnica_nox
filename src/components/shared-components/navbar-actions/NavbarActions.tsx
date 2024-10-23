"use client";

import Link from "next/link";
import Image from "next/image";
import { NAVBAR_ACTIONS_ITEMS } from "@/lib/constants";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon } from "@radix-ui/react-icons";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";

export const NavbarActions = () => {
  return (
    <div className="flex items-center">
      {NAVBAR_ACTIONS_ITEMS.map(({ title, image }) => (
        <Link
          href="#"
          key={title}
          className="rounded-full w-14 h-12 overflow-hidden"
        >
          <Image
            src={`/images/${image}`}
            alt={title}
            width={60}
            height={60}
            className="size-full object-contain"
          />
        </Link>
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <Avatar className="ml-2 w-11 h-11">
            <AvatarImage src={`/images/profile.png`}  className="size-full object-contain"/>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          sideOffset={6}
          align="end"
          alignOffset={0}
          className="max-w-56 px-4"
        >
          <DropdownMenuLabel className="text-[#05004E]">Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="ml-2 text-[#737791] hover:text-[#05004E]">
            <MoonIcon />
            <span>Dark mode</span>
          </DropdownMenuItem>

          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
