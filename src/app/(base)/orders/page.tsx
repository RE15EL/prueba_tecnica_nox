import Link from "next/link";

const OrdersPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/orders/orders">Summary</Link>
        </li>
        <li>
          <Link href="/orders/details">Details</Link>
        </li>
      </ul>
    </div>
  );
};
export default OrdersPage;
