import { FunctionComponent, useCallback, useMemo } from 'react';
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import Stack from '@mui/material/Stack';

import Column from 'src/modules/Student/pages/Task/Column';

import { IColumnUpdate } from 'src/interface/task';

import { COLUMNS } from 'src/constant/task';

type Props = {
  data: IColumnUpdate[];
  setColumnUpdate: (e: any) => void;
};
const Board: FunctionComponent<Props> = ({ data, setColumnUpdate }) => {
  const filteredColumns = useMemo(() => {
    return COLUMNS.map((column) => ({
      ...column,
      tasks: data?.filter(
        (task: { status: string }) => task.status === column.id,
      ),
    }));
  }, [data]);

  const handleDragEnd = useCallback(
    async (evt: {
      active: { id: string | number };
      over: { id: string | number };
    }) => {
      const { active, over } = evt;

      if (!over) return;

      const taskId = active.id;
      const newStatus = over.id;

      setColumnUpdate((prevTasks: IColumnUpdate[]) =>
        prevTasks.map((task: IColumnUpdate) =>
          task.id === taskId ? { ...task, status: newStatus } : task,
        ),
      );
      // try {
      //   await updateTaskStatus({
      //     taskId,
      //     status: newStatus,
      //   }).unwrap();
      // } catch (error) {
      //   // eslint-disable-next-line no-console
      //   console.log(error);
      // }
    },
    [],
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <Stack
      direction={'row'}
      alignItems={'flex-start'}
      justifyContent={'space-between'}
      gap={5}
    >
      <DndContext
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
        sensors={sensors}
      >
        {filteredColumns.map((column) => (
          <Column column={column} key={column.id} />
        ))}
      </DndContext>
    </Stack>
  );
};

export default Board;
