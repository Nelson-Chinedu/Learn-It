import { Box, Typography } from '@mui/material';
import { useDroppable } from '@dnd-kit/core';

import Assignment from 'src/modules/Student/pages/Task/Assignment';
import { IColumnUpdate } from 'src/interface/task';
import { FunctionComponent } from 'react';

type Props = {
  tasks: IColumnUpdate[];
  id: string;
  title: string;
  disabled: boolean;
};
const Column: FunctionComponent<{ column: Props }> = ({ column }) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
    disabled: column.disabled,
  });

  return (
    <Box ref={setNodeRef} width={'100%'} height={'100vh'} px={2}>
      <Typography variant="h2">{column.title}</Typography>
      <Box mt={4}>
        {column.tasks.map((task) => (
          <Assignment
            task={task}
            key={task.id}
            columnDisabled={column.disabled}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Column;
