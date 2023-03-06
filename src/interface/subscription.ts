export interface IData {
  id: string | number;
  date: string;
  amount: string | number;
  transaction: string;
  status: 'success' | 'failed';
}

export interface IColumn {
  id: 'date' | 'transaction' | 'amount' | 'status';
  label: string;
  minWidth?: number;
  align?: 'right' | 'left';
  format?: (value: number) => number;
}
