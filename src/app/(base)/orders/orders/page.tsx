import {
  Assignments,
  Filters,
  OrdeSummary,
} from "@/components/shared-components";

const OrderDetails = () => {
  return (
    <div className="p-[60px] pt-[44px] bg-[#F9FAFB] h-full flex flex-col">
      <Filters classes="my-4"/>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-[20px]">
        <OrdeSummary classes="col-span-full md:col-span-3"/>
        <Assignments classes="col-span-full md:col-span-1 min-w-[217px]"/>
      </div>
    </div>
  );
};

export default OrderDetails;
