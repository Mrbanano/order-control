import orderIntances from "@/config/orderInstance";

export const getOrderDetailById = async (id: string) => {
  if (!id) {
    console.error("[getOrderDetailById] - id is required");
    return null;
  }

  try {
    const { data } = await orderIntances.get(`/orders/${id}`);
    return data;
  } catch (error) {
    console.error("[getOrderDetailById] - error: ", error);
    return null;
  }
};
