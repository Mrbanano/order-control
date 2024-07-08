//type
import type { IRound } from "@/types/order/orderTypes";

//component
import { MessageSection } from "@/sections/general/MessageSection";
import { RoundItem } from "./RoundItem";

export const OrderDetailRounds = ({ rounds }: { rounds: IRound[] }) => (
  <div className="mb-7 p-5  md:py-8 rounded-lg shadow-md bg-white ">
    <h2 className="text-xl pb-3 font-medium">
      Rondas <span>({rounds?.length || ""})</span>
    </h2>
    <div className=" flex flex-col my-3 gap-5">
      {rounds.length === 0 && <MessageSection text="Aun no hay rondas" />}
      {rounds.length > 0 &&
        rounds.map((round, index) => (
          <RoundItem key={index} round={round} count={index + 1} />
        ))}
    </div>
  </div>
);
