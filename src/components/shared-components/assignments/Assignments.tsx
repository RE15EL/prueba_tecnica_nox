import { cn } from "@/lib/utils";

import { ButtonSpecial, Card } from "@/components/ui";
import { Title } from "../section-title/Title";
import { ORDER_ASSIGNMENTS } from "@/lib/constants";
import { UserView } from "../user-view/UserView";

interface Props {
  classes?: string;
}

export const Assignments = ({ classes }: Props) => {
  return (
    <Card classes={cn("flex flex-col", classes)}>
      <Title title="Assignments" subtitle="Assignments to messengers" />

      <div className="flex-1 mt-4 space-y-1">
        {ORDER_ASSIGNMENTS.map(({ image, label, value }, index) => {
          const strippedClass = index % 2 === 0 ? "bg-[#EDF2F7]" : " ";
          return (
            <UserView
              key={index}
              image={image}
              label={label}
              value={value}
              classes={strippedClass}
            />
          );
        })}
      </div>

      <ButtonSpecial label="Assign All" classes="w-full px-4" />
    </Card>
  );
};
