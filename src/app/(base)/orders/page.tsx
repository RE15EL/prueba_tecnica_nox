import Link from "next/link";

const OrdersPage = () => {
  
  return (
    <div className="p-[60px]">
      <div className="grid grid-cols-1 gap-4">
        <Link
          href="/orders/orders"
          className="hover:cursor-pointer w-40 h-20 rounded-[16px] text-slate-500 bg-slate-200 border border-slate-300 grid place-items-center"
        >
          Summary
        </Link>
        <Link
          href="/orders/details"
          className="hover:cursor-pointer w-40 h-20 rounded-[16px] text-slate-500 bg-slate-200 border border-slate-300 grid place-items-center"
        >
          Details
        </Link>
      </div>
    </div>
  );
};
export default OrdersPage;
