import { Metadata } from "next";

//components
import { PagesHeader } from "@/components/PagesHeader";
import { PageWrapper } from "@/components/PageWrapper";

//sections
import { ListOrdersSection } from "@/sections/orders/ListOrdersSection";

//utils
import { ordersCount } from "@/utils/orders/ordersCount";

//services
import { getOrders } from "@/services/server/getOrders";

//metadata
export const metadata: Metadata = {
  title: "Administración de ordenes. | ordenes",
  description:
    "En esta página podrás administrar a las ordenes de tu restaurante. Podrás ver su información y su detalle.",
};

export default async function Home() {
  const orders = await getOrders();

  return (
    <PageWrapper
      header={
        <PagesHeader title="Ordenes" subTitle={ordersCount(orders?.length)} />
      }
      section={<ListOrdersSection orders={orders} />}
    />
  );
}
