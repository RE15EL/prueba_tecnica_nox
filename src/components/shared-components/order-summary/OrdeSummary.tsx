"use client";

import { ButtonSpecial, Card, DataTable } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Title } from "../section-title/Title";
import { ORDERS_MOCK } from "@/mocks";
import { ColumnDef } from "@tanstack/react-table";
import { IOrder } from "@/types";
import { FormatStatus } from "../format-status/FormatStatus";
import { UserView } from "../user-view/UserView";
import { FilterByDate } from "../filter-by-date/FilterByDate";
import { useOrdersStore } from "@/store";
import { RenderMap } from "../render-map/RenderMap";

interface Props {
  classes?: string;
}

export const OrdeSummary = ({ classes }: Props) => {
  const view = useOrdersStore((state) => state.view);
  const columns: ColumnDef<IOrder>[] = [
    {
      accessorKey: "order_id",
      header: "ORDER ID",
    },
    {
      accessorKey: "client_name",
      header: "NAME",
      cell: ({ row }) => {
        const rowData = row.original;
        return (
          <UserView
            image={rowData.client_image ? rowData.client_image : "p_unk.png"}
            label={rowData.client_name}
          />
        );
      },
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
      <div className="space-y-4">
        <section className="flex justify-between items-center">
          <Title title="Orders" subtitle="Order Summary" />
          <FilterByDate />
        </section>
        {view === "list" ? (
          <DataTable
            data={ORDERS_MOCK}
            columns={columns}
            paginationBot
            paginationTop
          />
        ) : (
          <div> <RenderMap/></div>
        )}
      </div>
    </Card>
  );
};
