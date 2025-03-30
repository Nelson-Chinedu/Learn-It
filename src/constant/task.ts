import { IColumnUpdate } from 'src/interface/task';

type Props = {
  id: string;
  title: string;
  tasks: IColumnUpdate[];
  disabled: boolean;
}

export const COLUMNS: Props[] = [
  { id: 'todo', title: 'To do', tasks: [], disabled: false },
  { id: 'in_progress', title: 'In Progress', tasks: [], disabled: false },
  { id: 'done', title: 'Done', tasks: [], disabled: false },
  { id: 'completed', title: 'Completed', tasks: [], disabled: true },
];
