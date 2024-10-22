"use client";

import { ButtonSpecial, Card, DataTable } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Title } from "../section-title/Title";
import { ORDERS_MOCK } from "@/mocks";
import { ColumnDef } from "@tanstack/react-table";
import { IOrder } from "@/types";
import { FormatStatus } from "../format-status/FormatStatus";
import { UserView } from "../user-view/UserView";

interface Props {
  classes?: string;
}

export const OrdeSummary = ({ classes }: Props) => {
  const columns: ColumnDef<IOrder>[] = [
    {
      accessorKey: "order_id",
      header: "ORDER ID",
    },
    {
      accessorKey: "client_name",
      header: "NAME",
      cell: ({row})=>{
        const rowData = row.original;
        return (
          <UserView image={rowData.client_image ? rowData.client_image : 'p_unk.png'} label={rowData.client_name}/>
        )
      }
    },
    {
      accessorKey: "products",
      header: "PRODUCTS",
      cell: ({ row }) => {
        const { products } = row.original;
        return (
          <ul>
            {products.map((product) => (
              <li key={product}> {product}</li>
            ))}
          </ul>
        );
      },
    },
    {
      accessorKey: "email",
      header: "EMAIL/PHONE",
      cell: ({ row }) => {
        const { client_email, client_phone } = row.original;
        return (
          <div className="flex flex-col ">
            <span> {client_email} </span>
            {client_phone && <span> {client_phone} </span>}
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const rowData = row.original;
        return <FormatStatus status={rowData.status} />;
      },
    },
    {
      id: "actions",
      header: " ",
      cell: ({ row }) => {
        const { order_id } = row.original;
        return (
          <ButtonSpecial
            key={`btn-${order_id}`}
            label="Assign"
            classes="w-fit px-2 text-[12px]"
          />
        );
      },
    },
  ];
  return (
    <Card classes={cn("flex flex-col", classes)}>
      <Title title="Orders" subtitle="Order Summary" />
      <DataTable data={ORDERS_MOCK} columns={columns} />
    </Card>
  );
};
