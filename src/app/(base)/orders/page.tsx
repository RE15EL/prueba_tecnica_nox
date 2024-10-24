import {
  Assignments,
  Filters,
  OrdeSummary,
} from "@/components/shared-components";

const OrderDetails = () => {
  return (
    <div className="p-4 pt-2 md:p-[26px] md:pt-[16px] lg:p-[52px] lg:pt-[36px] lg:px-[20px] h-full flex flex-col">
      <Filters classes="mb-4"/>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-[20px]">
        <OrdeSummary classes="col-span-full lg:col-span-3"/>
        <Assignments classes="col-span-full lg:col-span-1 min-w-[217px]"/>
      </div>
    </div>
  );
};

export default OrderDetails;
