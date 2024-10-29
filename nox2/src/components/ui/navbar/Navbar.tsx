"use client";

import { useState } from "react";
import { roboto } from "@/config/fonts";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";
import { ButtonSpecial } from "../button-special/ButtonSpecial";
import { NAVBAR_ACTIONS_ITEMS } from "@/app/lib/constants";
import { HamburgerMenu } from "../hamburger-menu/HamburgerMenu";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="w-full h-[p6px] bg-transparent flex justify-between items-center py-[24px] px-[80px]">
      <div className={`${roboto.className} antialiased text-[32px]`}>
        break<span className="text-[#C026D3]">io</span>
      </div>

      <div className="flex flex-nowrap gap-4">
        <nav className="flex flex-col items-center gap-2 md:hidden">
          <button onClick={() => setOpen(true)}>
            <TextAlignJustifyIcon className="text-[#C026D3] w-8 h-8" />
          </button>
          <HamburgerMenu open={open} setOpen={setOpen} />
        </nav>

        <nav className="hidden md:flex md:items-center gap-2">
          {NAVBAR_ACTIONS_ITEMS.map((item) => (
            <ButtonSpecial
              key={item}
              label={item}
              classes="bg-transparent text-[#0F172A] px-3 shadow-none hover:shadow-md hover:border-[#C026D3] hover:text-[#C026D3]"
            />
          ))}
          <ButtonSpecial label="Start now" />
        </nav>
      </div>
    </header>
  );
};
