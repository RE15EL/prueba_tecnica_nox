import { ORDER_STATUS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface Props {
  status: ORDER_STATUS;
  classes?: string;
}

export const FormatStatus = ({ status, classes }: Props) => {
  return (
    <div
      className={cn(
        "text-[12px] px-1 font-semibold w-fit",
        {
          "bg-[#FEEBCB] text-[#744210] ": status === "PACKAGING",
          "bg-[#EDF2F7] text-[#1A202C] ": status === "PENDING",
          "bg-[#BEE3F8] text-[#2A4365] ": status === "TRANSPORTING",
          "bg-[#C6F6D5] text-[#22543D] ": status === "DELIVERED",
          "bg-[#FED7D7] text-[#822727] ": status === "CANCELED",
        },
        classes
      )}
    >
      {status}
    </div>
  );
};
