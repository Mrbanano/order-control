import orderIntances from "@/config/orderInstance";

const query = "?skip=0&take=5&tax_percentage=15&discount_percentage=0";

export const getOrders = async () => {
  try {
    console.log("[getOrders] - orderIntances: ", orderIntances);
    const { data } = await orderIntances.get(`/orders${query}`);
    console.log("[getOrders] - data: ", data);
    return data;
  } catch (error: any) {
    console.error("[getOrders] - error: ", error);
    return null;
  }
};
