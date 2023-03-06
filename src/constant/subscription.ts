import { format } from 'date-fns';

import { IData, IColumn } from 'src/interface/subscription';

function createData(
  id: string | number,
  date: string,
  amount: number,
  transaction: string,
  status: 'success' | 'failed'
): IData {
  return { id, date, amount, transaction, status };
}

export const rows = [
  createData(
    1,
    format(new Date(), 'dd/MM/yyyy'),
    2000,
    '1678031047441',
    'success'
  ),
  createData(
    1,
    format(new Date(), 'dd/MM/yyyy'),
    2000,
    '1678031047448',
    'success'
  ),
  createData(
    1,
    format(new Date(), 'dd/MM/yyyy'),
    2000,
    '1678031047444',
    'success'
  ),
  createData(
    1,
    format(new Date(), 'dd/MM/yyyy'),
    2000,
    '1678031047445',
    'success'
  ),
];

export const columns: readonly IColumn[] = [
  { id: 'date', label: 'Date', minWidth: 170, align: 'left' },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 170,
    align: 'left',
    format: (value: number) => value,
  },
  { id: 'transaction', label: 'Transaction', minWidth: 170, align: 'left' },
  { id: 'status', label: 'Status', minWidth: 170, align: 'left' },
];
