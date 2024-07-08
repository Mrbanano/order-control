export const ItemDetail = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <p className="flex gap-1">
    <span className="font-bold">{label}</span>
    <span className="font-normal">{value}</span>
  </p>
);
