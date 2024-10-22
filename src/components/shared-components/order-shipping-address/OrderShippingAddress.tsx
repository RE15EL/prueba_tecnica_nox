import { cn } from "@/lib/utils";
import { Title } from "../section-title/Title";
import { Card } from "@/components/ui";

interface Props {
  classes?: string;
}

export const OrderShippingAddress = ({ classes }: Props) => {
  return (
    <div className={cn(classes)}>
      <Card classes={cn("flex flex-col", classes)}>
        <Title title="Shipping Address" subtitle="Order Shipping Address" />
      </Card>
    </div>
  );
};