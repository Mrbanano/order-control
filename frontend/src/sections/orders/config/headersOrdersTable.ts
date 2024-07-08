import { IOrderTable } from "@/types/order/orderTypes";
import { TableColumn } from "@/types/table/tableTypes";

export const headersOrdersTable: TableColumn<IOrderTable>[] = [
  {
    label: "ID",
    accessor: "id",
  },
  {
    label: "Estado",
    accessor: "paid",
  },
  {
    label: "Subtotal",
    accessor: "subtotal",
  },
  {
    label: "Impuestos",
    accessor: "taxes",
  },
  {
    label: "Descuento",
    accessor: "discounts",
  },
  {
    label: "Creado",
    accessor: "created",
  },
  {
    label: "",
    accessor: "actions" as never,
  },
];
