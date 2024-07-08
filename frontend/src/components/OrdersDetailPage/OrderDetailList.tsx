//componets
import { ItemDetail } from "../ItemDetail";

//utils
import { formatCurrency } from "@/utils/currency/formatCurrency";
import { getStatus } from "@/utils/orders/getStatus";
import { formatDate } from "@/utils/date/formatDate";

export const OrderDetailList = ({
  discounts,
  taxes,
  subtotal,
  total,
  paid,
  created,
}: {
  discounts: number;
  taxes: number;
  subtotal: number;
  total: number;
  paid: boolean;
  created: string;
}) => (
  <div className="mb-7 p-5  md:py-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-2  bg-white">
    <ItemDetail label="Descuentos:" value={" - " + formatCurrency(discounts)} />

    <ItemDetail label="Impuestos:" value={formatCurrency(taxes)} />
    <ItemDetail label="Subtotal:" value={formatCurrency(subtotal)} />
    <ItemDetail label="Estado:" value={getStatus(paid)} />
    <ItemDetail label="Creado:" value={formatDate(created)} />
    <ItemDetail label="Total:" value={formatCurrency(total)} />
  </div>
);
