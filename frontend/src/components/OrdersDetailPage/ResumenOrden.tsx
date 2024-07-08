//types
import type { IItem } from "@/types/order/orderTypes";

//utils
import { formatCurrency } from "@/utils/currency/formatCurrency";

export const ResumenOrden = ({
  items = [],
  total = 0,
}: {
  items?: IItem[];
  total: number;
}) => (
  <aside className="w-full md:w-4/12 mb-7 p-5  md:py-8 rounded-lg shadow-md bg-white">
    <h2 className="text-lg font-semibold mb-3">Articulos</h2>
    <section className="flex flex-col">
      {items.map((item, index) => (
        <div key={index} className="border-b-2 border-black/5 py-4 flex h-full">
          <div className=" w-[70px]">
            {item.img && (
              <img
                src={item.img}
                alt={item.name}
                className="object-contain h-full w-full"
              />
            )}
          </div>
          <div className=" w-full flex flex-col items-start justify-between">
            <p className="text-lg font-semibold w-full">{item.name}</p>
            <div className=" flex items-center justify-between w-full">
              <p className="font-light">
                {formatCurrency(item.price_per_unit)}
                <span className="text-xs font-light px-1">c/u</span>
                {" * "}
                {item.total / item.price_per_unit}
                <span className="text-xs font-light px-1">unidades</span>
              </p>
              <p className="font-semibold">{formatCurrency(item.total)}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between font-bold text-xl mt-7">
        <h2>Total:</h2>
        <p>{formatCurrency(total)}</p>
      </div>
    </section>
  </aside>
);
