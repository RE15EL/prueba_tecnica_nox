import { cn } from "@/lib/utils";
import Image from "next/image";

export const ViewMapIcon = ({classes = ""}) => {
  return (
    <div>
      <Image
        src="/images/view_map.png"
        alt="view map"
        width={24}
        height={24}
        className={cn("w-full object-contain", classes)}
      />
    </div>
  );
};
