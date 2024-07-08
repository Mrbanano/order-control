import { ActionTable } from "../table/tableTypes";

export interface IOrder {
  id: string | number;
  created: string;
  paid: boolean;
  subtotal: number;
  taxes: number;
  discounts: number;
  total?: number;
  items?: IItem[];
  rounds?: IRound[];
}

export interface IOrderTable {
  id: string | number;
  created: string;
  paid: string;
  subtotal: string;
  taxes: string;
  discounts: string;
}

export interface IItem {
  name: string;
  quantity: number;
  price_per_unit: number;
  total: number;
  img: string;
}

export interface IRound {
  created: string;
  items: IItem[];
  img?: string;
}

export interface TableDataOrdes {
  id: string;
  created: string;
  paid: boolean;
  subtotal: number;
  taxes: number;
  discounts: number;
  actions: ActionTable<IOrderTable>[];
}
