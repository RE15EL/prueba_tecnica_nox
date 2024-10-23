"use client";

import { cn } from "@/lib/utils";
import { Title } from "../section-title/Title";
import { ButtonSpecial, Card } from "@/components/ui";
import { DataTable } from "@/components/ui/data-table/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { FormatStatus } from "../format-status/FormatStatus";
import { IOrderStatus } from "@/types";
import { ORDER_STATUS_MOCK } from "@/mocks";

interface Props {
  classes?: string;
}

export const OrderStatus = ({ classes }: Props) => {
  const columns: ColumnDef<IOrderStatus>[] = [
    {
      accessorKey: "date",
      header: "FECHA",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const rowData = row.original;
        return <FormatStatus status={rowData.status} />;
      },
    },
  ];

  return (
    <div className={cn(classes)}>
      <Card classes={cn("flex flex-col pb-14", classes)}>
        <div className="size-full flex justify-between items-center mb-4">
          <Title title="Status" subtitle="Status Orders" />
          <ButtonSpecial label="Change Status" />
        </div>
        <DataTable
          data={ORDER_STATUS_MOCK}
          columns={columns}
          paginationTop={false}
          paginationBot={false}
        />
      </Card>
    </div>
  );
};
