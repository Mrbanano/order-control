export function getStatus(paid: boolean) {
  return paid ? "🟢 Pagado" : "🔴 Pendiente";
}
