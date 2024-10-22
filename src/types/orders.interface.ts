import { ORDER_STATUS } from "@/lib/constants";

export interface IOrdersAssignment {
  image: string;
  label: string;
  value: number;
}

export type IOrderStatus = {
  date: string;
  status: ORDER_STATUS;
};
