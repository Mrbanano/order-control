//Types
import type { IOrderTable } from "@/types/order/orderTypes";
import { ActionTable } from "@/types/table/tableTypes";
//Components
import Link from "next/link";

export const actionsOrdes: ActionTable<IOrderTable>[] = [
  {
    label: "Ver detalles",
    component: (order: IOrderTable) => [
      <Link href={`/orders/${order.id}`} key="1">
        <span className="text-blue-500">Ver detalles</span>
      </Link>,
    ],
  },
];
