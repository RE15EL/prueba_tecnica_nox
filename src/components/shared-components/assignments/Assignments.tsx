import { Card } from "@/components/ui";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ORDER_ASSIGNMENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  classes?: string;
}

export const Assignments = ({ classes }: Props) => {
  return (
    <Card classes={cn("flex flex-col", classes)}>
      <h2 className="text-[#05004E] text-[20px] font-bold"> Assignments</h2>
      <h3 className="text-[#737791] text-[16px] font-normal"> Assignments</h3>
      
      <div className="flex-1 mt-4 space-y-2">
        {ORDER_ASSIGNMENTS.map(({ image, label, value }, index) => (
          <div
            key={index}
            className={cn("flex justify-between items-center p-2.5 ", {
              "bg-[#EDF2F7]": index % 2 === 0,
            })}
          >
            <div className="flex items-center gap-2">
              <div className="rounded-full overflow-hidden">
                <Image src={`/images/${image}`} alt="" width={30} height={30} />
              </div>
              <span className="text-[#4A5568] text-sm">{label}</span>
            </div>
            <Badge className="bg-[#FF7500] text-white w-6 h-6 rounded-full hover:bg-[#FF7500]">
              {value}
            </Badge>
          </div>
        ))}
      </div>

      <Button variant="warning" className="w-full px-4 rounded-[16px]"> Assign All</Button>
    </Card>
  );
};
