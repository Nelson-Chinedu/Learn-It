import { FunctionComponent } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { format } from 'date-fns';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { MoreVert } from '@mui/icons-material';

import { Card, Menu } from 'src/components';

import TaskView from 'src/modules/Student/components/Modals/TaskViewModal';

import useModal from 'src/hooks/useModal';
import useMenu from 'src/hooks/useMenu';

import { IColumnUpdate } from 'src/interface/task';

const Assignment: FunctionComponent<{
  columnDisabled: boolean;
  task: IColumnUpdate;
}> = ({ task, columnDisabled }) => {
  const [state, setState] = useModal();
  const { open, anchorEl, handleClick, handleClose } = useMenu();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    disabled: columnDisabled,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        marginBottom: '20px',
        cursor: 'move',
      }
    : { marginBottom: '20px' };

  const handleViewTask = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleClose();
    const {
      id,
      title,
      dueDate,
      note,
      feedback,
      mentor: { firstname, picture },
    } = task;
    setState({
      ...state,
      modalName: 'TaskView',
      data: { id, title, picture, dueDate, note, firstname, feedback },
    });
  };

  return (
    <>
      <Box ref={setNodeRef} {...listeners} {...attributes} style={style}>
        <Card
          width="100%"
          background="#393A4A"
          borderRadius="4px"
          height="120px"
        >
          <Box
            px={4}
            pt={0}
            pb={4}
            height={'-webkit-fill-available'}
            display={'flex'}
            flexDirection={'column'}
          >
            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              flex={1}
            >
              <Typography variant="body2" color="white">
                {task.title}
              </Typography>
              <IconButton
                sx={{ cursor: 'pointer' }}
                onPointerUp={(e) => {
                  e.preventDefault();
                  handleClick(e);
                }}
              >
                <MoreVert fontSize="small" style={{ color: '#fff' }} />
              </IconButton>
            </Stack>
            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              mt={3}
            >
              <Stack
                bgcolor={'#ff0000d9'}
                direction={'row'}
                alignItems={'center'}
                width={'fit-content'}
                p={1}
                borderRadius={1}
                gap={1}
              >
                <CalendarMonthIcon
                  style={{ color: '#fff', fontSize: '16px' }}
                />
                <Typography
                  fontSize={'14px'}
                  color="#fff"
                  fontWeight={300}
                  variant="subtitle2"
                >
                  {format(new Date(task.dueDate), 'dd/MM')}
                </Typography>
              </Stack>
              <Avatar
                alt={'mentor'}
                src={task.mentor.picture}
                sx={{ width: 25, height: 25, fontSize: '14px' }}
              >
                {`${task.mentor.firstname.charAt(0)} `}
              </Avatar>
            </Stack>
          </Box>
        </Card>
      </Box>
      <TaskView />
      <Menu
        menus={[
          {
            name: 'View Task',
            action: (e?: { preventDefault: () => void }) => handleViewTask(e),
          },
          {
            name: 'Move Task',
            action: () => null,
          },
        ]}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </>
  );
};

export default Assignment;
