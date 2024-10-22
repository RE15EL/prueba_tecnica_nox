import { cn } from "@/lib/utils";
import { Title } from "../section-title/Title";
import { Card } from "@/components/ui";

interface Props {
  classes?: string;
}

export const OrderUser = ({ classes }: Props) => {
  return (
    <div className={cn(classes)}>
      <Card classes={cn("flex flex-col", classes)}>
        <Title title="Order User" subtitle="User creating the order" />
      </Card>
    </div>
  );
};
