//types
import type { IOrder, IOrderTable } from "@/types/order/orderTypes";

//components
import Table from "@/components/Table";

//config
import { headersOrdersTable } from "./config/headersOrdersTable";
import { actionsOrdes } from "./config/actionsOrdes";

//formatters
import { formatOrderRow } from "@/app/formatters/formatOrderRow";
import { MessageSection } from "../general/MessageSection";

export const ListOrdersSection = ({ orders }: { orders: IOrder[] }) => {
  if (orders === null)
    return <MessageSection text="No fue posible recuperar las ordenes. " />;

  return (
    <>
      {orders.length === 0 && (
        <MessageSection text="No hay ordes que mostrar por ahora. " />
      )}
      {orders.length > 0 && (
        <Table<IOrderTable>
          columns={headersOrdersTable}
          data={formatOrderRow(orders)}
          actions={actionsOrdes}
        />
      )}
    </>
  );
};
