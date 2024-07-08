//types
import type { IRound } from "@/types/order/orderTypes";

//utils
import { formatDate } from "@/utils/date/formatDate";

export const RoundItem = ({
  round,
  count,
}: {
  round: IRound;
  count: number;
}) => (
  <div className="border-b-2 border-black/10 pb-5">
    <div className="p-1 flex items-center justify-between font-semibold">
      <h3 className="my-2">Ronda No. {count}</h3>
      <p>{formatDate(round.created)}</p>
    </div>
    <div className="flex md:gap-3 flex-wrap my-2">
      {round.items.map((item, index) => (
        <div
          key={index}
          className="aspect-square w-1/2 md:w-[150px] rounded-xl  "
        >
          <div className="border-2 border-transparent h-[80%] w-full rounded-t-xl">
            <img
              src={item.img || "https://via.placeholder.com/150"}
              alt={item.name}
              className="object-contain h-full w-full rounded-t-xl"
            />
          </div>
          <div className="w-full p-1">
            <p className="font-medium my-1">{item.name}</p>
            <p className="text-sm flex gap-2">
              <span>Cantitad:</span>
              <span className="font-semibold">{item.quantity}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
