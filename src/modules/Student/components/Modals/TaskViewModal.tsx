import { FunctionComponent, SyntheticEvent, useState } from 'react';
import sanitizeHtml from 'sanitize-html';
import { format } from 'date-fns';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material';

import { Modal, TabNav } from 'src/components';

import { pxToRem } from 'src/helpers/formatFont';

import useModal from 'src/hooks/useModal';

import Note from 'src/modules/Student/pages/Task/Note';
import Submission from 'src/modules/Student/pages/Task/Submission';
import Feedback from 'src/modules/Student/pages/Task/Feedback';

const Wrapper = styled(Box)({
  '& .MuiTypography-subtitle2': {
    paddingBottom: '1em',
  },
  '& .MuiTypography-h3': {
    fontSize: pxToRem(20),
    fontWeight: 600,
    margin: '1em .6em',
  },
  '& .MuiButton-contained': {
    margin: '1em 0px',
  },
});

const Nav = ['Note', 'Feedback', 'Submission'];

const TaskViewModal: FunctionComponent<Record<string, never>> = () => {
  const [state, _] = useModal();
  const [value, setValue] = useState(0);

  return (
    <Modal modalName="TaskView" title={'Task'}>
      <Wrapper>
        <Stack direction={'row'} alignItems={'center'} gap={2}>
          <Avatar
            alt={'mentor'}
            src={state?.data?.picture}
            sx={{ width: 60, height: 60, fontSize: '14px' }}
          >
            {`${state?.data?.firstname.charAt(0)} `}
          </Avatar>
          <Box>
            <Typography
              style={{
                fontSize: '14px',
                fontWeight: 400,
                fontFamily: '"Source Sans Pro", sans-serif',
                textTransform: 'capitalize',
              }}
              component="div"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(state?.data?.title ?? null)?.replace(
                  /["]+/g,
                  '',
                ),
              }}
            />
            <Typography fontSize={'14px'} fontWeight={300} variant="subtitle2">
              Due date:{' '}
              {format(new Date(state?.data?.dueDate ?? null), 'dd/MM/yyyy')}
            </Typography>
          </Box>
        </Stack>

        <Grid
          container
          alignItems="baseline"
          justifyContent="flex-start"
          my={8}
        >
          <Grid size={{ md: 12 }}>
            <TabNav
              nav={Nav}
              value={value}
              handleChange={(_e: SyntheticEvent, newValue: number) =>
                setValue(newValue)
              }
            >
              <Box sx={{ margin: '2em 0px' }}>
                {value === 0 && <Note note={state?.data?.note} />}
                {value === 1 && <Feedback feedback={state?.data?.feedback} />}
                {value === 2 && <Submission task={state?.data?.id} />}
              </Box>
            </TabNav>
          </Grid>
        </Grid>
      </Wrapper>
    </Modal>
  );
};

export default TaskViewModal;
