//components
import { DescribeOrder } from "@/components/OrdersDetailPage/DescribeOrder";
import { MessageSection } from "@/sections/general/MessageSection";
import { OrderDetailList } from "@/components/OrdersDetailPage/OrderDetailList";
import { OrderDetailRounds } from "@/components/OrdersDetailPage/OrderDetailRounds";
import { PagesHeader } from "@/components/PagesHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { ResumenOrden } from "@/components/OrdersDetailPage/ResumenOrden";

//sections
import { OrderDetailSection } from "@/sections/orderDetail/OrderDetailSection";

//services
import { getOrderDetailById } from "@/services/server/getOrderDetailById";

import Link from "next/link";
import { Metadata } from "next";
import { getOrders } from "@/services/server/getOrders";

export const metadata: Metadata = {
  title: "Detalles de la orden | ordenes",
  description:
    "En esta página podrás ver los detalles de una orden en específico. Podrás ver su información y su detalle.",
};

export default async function OrderDetail({
  params: { orderId },
}: {
  params: { orderId: string };
}) {
  const order = await getOrderDetailById(orderId);

  if (!order)
    return (
      <MessageSection
        text={`No se encontró la orden con el id: ${orderId}`}
        component={
          <Link href="/orders">
            <span className="text-black  rounded-md py-5 underline">
              Volver a ordenes
            </span>
          </Link>
        }
      />
    );

  return (
    <>
      <PageWrapper
        header={
          <PagesHeader
            title="Detalles de la orden: "
            subTitle={`# ${orderId}`}
          />
        }
        section={
          <OrderDetailSection>
            <DescribeOrder>
              <OrderDetailList
                discounts={order.discounts}
                taxes={order.taxes}
                subtotal={order.subtotal}
                total={order.total || 0}
                paid={order.paid}
                created={order.created}
              />
              <OrderDetailRounds rounds={order.rounds} />
            </DescribeOrder>
            <ResumenOrden items={order.items} total={order.total || 0} />
          </OrderDetailSection>
        }
      />
    </>
  );
}
