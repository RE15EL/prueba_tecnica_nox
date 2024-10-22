import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Props {
  image: string;
  label: string;
  value?: number;
  classes?: string;
}

export const UserView = ({ image, label, value, classes }: Props) => {
  return (
    <div className={cn("flex justify-between items-center p-2.5", classes)}>
      <div className="flex items-center gap-2">
        {image && (
          <div className="rounded-full overflow-hidden">
            <Image src={`/images/${image}`} alt={`image ${image}`} width={24} height={24}/>
          </div>
        )}
        <span className="text-[#4A5568] text-[12px]">{label}</span>
      </div>

      {value && (
        <Badge className="bg-[#FF7500] text-white w-6 h-6 rounded-full hover:bg-[#FF7500]">
          {value}
        </Badge>
      )}
    </div>
  );
};
