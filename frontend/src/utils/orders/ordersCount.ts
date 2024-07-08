export const ordersCount = (ordersCount: number) => {
  return ordersCount > 0 ? `: (${ordersCount})` : "";
};
