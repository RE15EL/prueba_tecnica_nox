import { cn } from "@/lib/utils";
import { Title } from "../section-title/Title";
import { Card } from "@/components/ui";
import { OrderDetailProducts } from "../order-detail-products/OrderDetailProducts";

interface Props {
  classes?: string;
}

export const OrderProducts = ({ classes }: Props) => {
  return (
    <div className={cn(classes)}>
      <Card classes={cn("flex flex-col gap-4", classes)}>
        <Title title="Products" subtitle="Order Products" />
        <OrderDetailProducts/>
      </Card>
    </div>
  );
};