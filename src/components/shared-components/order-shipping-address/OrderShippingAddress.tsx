import { cn } from "@/lib/utils";
import { Title } from "../section-title/Title";
import { ButtonSpecial, Card } from "@/components/ui";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  classes?: string;
}

export const OrderShippingAddress = ({ classes }: Props) => {
  return (
    <div className={cn(classes)}>
      <Card classes={cn("flex flex-col", classes)}>
        <div className="size-full flex justify-between items-center">
          <Title title="Shipping Address" subtitle="Order Shipping Address" />
          <ButtonSpecial label="Assign" classes="w-fit px-2 text-[12px]" />
        </div>
        <Image
          src="/images/map_shipping.png"
          alt="Map"
          width={356}
          height={356}
          className="w-full object-contain mt-4 mb-3"
        />
        <Textarea
          value="Calle 5 e/ 25 y 36 Siboney Playa #4578"
          className=""
          disabled
        />
      </Card>
    </div>
  );
};
