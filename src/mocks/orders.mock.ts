import { IOrder, IOrderStatus } from "@/types";

export const ORDERS_MOCK: IOrder[] = [
  {
    order_id: "O-4516",
    client_name: "Juan Pérez",
    client_email: "juan.perez@email.com",
    client_phone: "555-1234",
    products: ["Laptop", "Mouse"],
    status: "DELIVERED",
    client_image:"p4.png",
  },
  {
    order_id: "O-4517",
    client_name: "María López",
    client_email: "maria.lopez@email.com",
    client_phone: "555-5678",
    products: ["Smartphone", "Funda"],
    status: "PENDING",
    client_image:"",
  },
  {
    order_id: "O-4518",
    client_name: "Carlos García",
    client_email: "carlos.garcia@email.com",
    client_phone: "555-8765",
    products: ["Cámara", "Trípode"],
    status: "TRANSPORTING",
    client_image:"",
  },
  {
    order_id: "O-4519",
    client_name: "Ana Martínez",
    client_email: "ana.martinez@email.com",
    client_phone: "555-4321",
    products: ["Tablet"],
    status: "PACKAGING",
    client_image:"p5.png",
  },
  {
    order_id: "O-4520",
    client_name: "Luis Fernández",
    client_email: "luis.fernandez@email.com",
    client_phone: "555-6789",
    products: ["Auriculares", "Altavoz"],
    status: "CANCELED",
    client_image:"",
  },
];

export const ORDER_STATUS_MOCK: IOrderStatus[] = [
  {
    date: "16/10/2024 10:45:20",
    status: "PACKAGING",
  },
  {
    date: "15/10/2024 08:30:13",
    status: "PENDING",
  },
];
