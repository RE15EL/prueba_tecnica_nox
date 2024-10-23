"use client";

import { DataTable } from "@/components/ui";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

interface IOrderDetailsProducts {
  productName: string;
  image: string;
  quantity: number;
  price: number;
}
export const data: IOrderDetailsProducts[] = [
  {
    productName: "OLLA REINA ROYAL 6L",
    quantity: 1,
    price: 75,
    image: "olla.png",
  },
  {
    productName: "LICUADORA MILEXUS CC",
    quantity: 1,
    price: 45,
    image: "licuadora.png",
  },
];

export const OrderDetailProducts = () => {
  const columns: ColumnDef<IOrderDetailsProducts>[] = [
    {
      accessorKey: "productName",
      header: "NAME",
      cell: ({ row }) => {
        const {image, productName} = row.original;
        
        return (
          <div className="flex items-center gap-2">
            <Image 
              src={`/images/${image}`}
              alt={productName}
              width={32}
              height={32}
              className=""
            />
            <span>{productName}</span>
          </div>
        )
      },
    },
    {
      accessorKey: "quantity",
      header: "COUNT",
    },
    {
      accessorKey: "price",
      header: "PRICE",
      cell: ({ row }) => {
        const { price } = row.original;
        return <span> ${price.toFixed(2)} </span>;
      },
    },
  ];

  return (
    <DataTable
      data={data}
      columns={columns}
      paginationTop={false}
      paginationBot={false}
    />
  );
};
