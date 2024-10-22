import { cn } from "@/lib/utils";
import { Title } from "../section-title/Title";
import { Card } from "@/components/ui";

interface Props {
  classes?: string;
}

export const OrderStatus = ({ classes }: Props) => {
  return (
    <div className={cn(classes)}>
      <Card classes={cn("flex flex-col", classes)}>
        <Title title="Status" subtitle="Status Orders" />
      </Card>
    </div>
  );
};