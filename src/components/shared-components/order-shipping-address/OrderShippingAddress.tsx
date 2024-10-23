import { cn } from "@/lib/utils";
import { Title } from "../section-title/Title";
import { Card } from "@/components/ui";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  classes?: string;
}

export const OrderShippingAddress = ({ classes }: Props) => {
  return (
    <div className={cn(classes)}>
      <Card classes={cn("flex flex-col gap-4", classes)}>
        <Title title="Shipping Address" subtitle="Order Shipping Address" />
        <div className="my-3 size-full">
          <Image
            src="/images/map_shipping.png"
            alt="Map"
            width={456}
            height={456}
            className="w-full object-contain"
          />
        </div>
        <Textarea 
          value="Calle 5 e/ 25 y 36 Siboney Playa #4578" 
          className="py-8"
          disabled
        />
      </Card>
    </div>
  );
};