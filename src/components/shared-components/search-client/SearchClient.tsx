import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export const SearchClient = () => {
  return (
    <div className="w-[323px] h-[40px] relative text-[#A0AEC0] text-sm">
      <Input
        placeholder="Find Client"
        className="size-full rounded-[20px] pl-4 border-[#E2E8F0] placeholder-[#E2E8F0] focus:placeholder-[#A0AEC0]"
      />
      <SearchIcon className="h-5 w-5 absolute top-1/4 right-4" />
    </div>
  );
};
