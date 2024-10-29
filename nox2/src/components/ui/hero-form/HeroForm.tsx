"use client";

import { ButtonSpecial } from "../button-special/ButtonSpecial";

export const HeroForm = () => {
  return (
    <div className="flex items-center gap-[16px]">
     
      <input placeholder="Enter your name" className="w-[221px] h-[48px] rounded-[19px] py-[13px] px-[24px] bg-white text-[#475569]" />
      <ButtonSpecial
        label="Start Now"
        classes="w-[208px] h-[48px] rounded-[24px] px-[24px] font-semibold"
      />
    </div>
  );
};
