import { cn } from "@/lib/utils";
import { Title } from "../section-title/Title";
import { Card } from "@/components/ui";
import { CreateOrderForm } from "../create-order-form/CreateOrderForm";

interface Props {
  classes?: string;
}

export const OrderUser = ({ classes }: Props) => {
  return (
    <div className={cn(classes)}>
      <Card classes={cn("flex flex-col gap-4", classes)}>
        <Title title="Order User" subtitle="User creating the order" />
        <CreateOrderForm/>
      </Card>
    </div>
  );
};
