import { NAVBAR_ACTIONS_ITEMS } from "@/app/lib/constants";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ButtonSpecial } from "../button-special/ButtonSpecial";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const HamburgerMenu = ({ open, setOpen }: Props) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="h-full bg-white">
        <div className="flex flex-col h-full">
          <div className="flex-1 flex flex-col items-center gap-2">
            {NAVBAR_ACTIONS_ITEMS.map((item) => (
              <ButtonSpecial
                key={item}
                label={item}
                classes="bg-transparent text-[#0F172A] shadow-none hover:shadow-md hover:border-[#C026D3] hover:text-[#C026D3]"
              />
            ))}
          </div>
          <ButtonSpecial label="Start now" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
