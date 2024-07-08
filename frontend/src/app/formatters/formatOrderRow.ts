//types
import type { IOrder } from "@/types/order/orderTypes";

//utils
import { formatDate } from "@/utils/date/formatDate";
import { getStatus } from "@/utils/orders/getStatus";
import { formatCurrency } from "@/utils/currency/formatCurrency";

export const formatOrderRow = (orders: IOrder[]) => {
  return orders.map((order) => {
    return {
      id: order.id,
      created: formatDate(order.created),
      paid: getStatus(order.paid),
      subtotal: formatCurrency(order.subtotal),
      taxes: formatCurrency(order.taxes),
      discounts: formatCurrency(order.discounts),
    };
  });
};
