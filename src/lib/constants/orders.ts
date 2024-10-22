import { IOrdersAssignment } from "@/types";

export type ORDER_STATUS =
  | "ALL STATUS"
  | "TRANSPORTING"
  | "PACKAGING"
  | "DELIVERED"
  | "PENDING"
  | "CANCELED";

export const ORDER_ASSIGNMENTS: IOrdersAssignment[] = [
  {
    image: "p1.png",
    label: "Segun Adebayo",
    value: 5,
  },
  {
    image: "p2.png",
    label: "Segun Adebayo",
    value: 4,
  },
  {
    image: "p3.png",
    label: "Segun Adebayo",
    value: 1,
  },
];


