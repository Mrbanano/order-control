export interface TableColumn<T> {
  label: string;
  accessor: keyof T;
}

export interface ActionTable<T> {
  label: string;
  onClick?: (row: T) => void;
  component?: (row: T) => React.ReactNode;
}

export interface TableProps<T> {
  columns?: TableColumn<T>[];
  data?: T[];
  actions?: ActionTable<T>[];
  cols?: number;
}
