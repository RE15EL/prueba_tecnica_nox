import {
  OrderProducts,
  OrderShippingAddress,
  OrderStatus,
  OrderUser,
} from "@/components/shared-components";

const OrderDetailsPage = () => {
  return (
    <div className="p-[52px] pt-[24px] lg:px-[20px] bg-[#F9FAFB] h-full flex flex-col">
      <div className="flex-1 space-y-[20px]">
        <section className="grid grid-cols-1 md:grid-cols-6 gap-[20px]">
          <OrderUser classes="col-span-full md:col-span-4 " />
          <OrderShippingAddress classes="col-span-full md:col-span-2 " />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-6 gap-[20px]">
          <OrderProducts classes="col-span-full md:col-span-3 " />
          <OrderStatus classes="col-span-full md:col-span-3 " />
        </section>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
