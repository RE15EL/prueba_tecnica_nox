import {
  OrderProducts,
  OrderShippingAddress,
  OrderStatus,
  OrderUser,
} from "@/components/shared-components";

const OrderDetailsPage = () => {
  return (
    <div className="p-[52px] pt-[24px] bg-[#F9FAFB] h-full flex flex-col">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 grid-rows-4 gap-[20px]">
        <OrderUser classes="col-span-full md:col-span-3 row-span-2" />
        <OrderShippingAddress classes="col-span-full md:col-span-1 row-span-2" />
        <OrderProducts classes="col-span-full md:col-span-2 row-span-1" />
        <OrderStatus classes="col-span-full md:col-span-2 row-span-1" />
      </div>
    </div>
  );
};

export default OrderDetailsPage;
