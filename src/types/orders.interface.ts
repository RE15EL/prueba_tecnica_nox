import { ORDER_STATUS } from "@/lib/constants";

export type IOrder = {
  order_id: string;
  client_name: string;
  client_email: string;
  client_phone?: string;
  products: string[];
  status: ORDER_STATUS;
};

export interface IOrdersAssignment {
  image: string;
  label: string;
  value: number;
}

export type IOrderStatus = {
  date: string;
  status: ORDER_STATUS;
};
