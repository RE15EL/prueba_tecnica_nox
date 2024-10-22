import { ButtonSpecial, Card } from "@/components/ui";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ORDER_ASSIGNMENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Title } from "../section-title/Title";

interface Props {
  classes?: string;
}

export const Assignments = ({ classes }: Props) => {
  return (
    <Card classes={cn("flex flex-col", classes)}>
      <Title title="Assignments" subtitle="Assignments to messengers" />

      <div className="flex-1 mt-4 space-y-1">
        {ORDER_ASSIGNMENTS.map(({ image, label, value }, index) => (
          <div
            key={index}
            className={cn("flex justify-between items-center p-2.5 ", {
              "bg-[#EDF2F7]": index % 2 === 0,
            })}
          >
            <div className="flex items-center gap-2">
              <div className="rounded-full overflow-hidden">
                <Image src={`/images/${image}`} alt="" width={24} height={24} />
              </div>
              <span className="text-[#4A5568] text-[12px]">{label}</span>
            </div>
            <Badge className="bg-[#FF7500] text-white w-6 h-6 rounded-full hover:bg-[#FF7500]">
              {value}
            </Badge>
          </div>
        ))}
      </div>

      <ButtonSpecial label="Assign All" classes="w-full px-4" />
    </Card>
  );
};
