import {
  Assignments,
  Filters,
  OrdeSummary,
} from "@/components/shared-components";

const Orders = () => {
  return (
    <div className="p-[60px] bg-[#F9FAFB] h-full flex flex-col">
      <Filters classes="mb-4"/>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4">
        <OrdeSummary classes="col-span-full md:col-span-3" />
        <Assignments classes="col-span-full md:col-span-1"/>
      </div>
    </div>
  );
};

export default Orders;
