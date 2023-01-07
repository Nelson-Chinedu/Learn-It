import { ReactElement, FunctionComponent } from 'react';
import {
  Dialog as MuiDialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Typography,
  Stack,
  Box,
} from '@mui/material';

import { Button } from 'src/components';

import useDialog from 'src/hooks/useDialog';

type Props = {
  dialogName: string;
  title: string;
  handleAction: (e?: { preventDefault: () => void }) => void;
  children: ReactElement;
};

const Dialog: FunctionComponent<Props> = ({
  dialogName,
  title,
  handleAction,
  children,
}) => {
  const [state, setState] = useDialog();

  const _handleCancel = () => {
    setState({ ...state, dialogName: '', id: '' });
  };

  return (
    <MuiDialog open={state.dialogName === dialogName}>
      <Box sx={{ padding: '1em 2em' }}>
        <DialogTitle>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ padding: '0px !important' }}>
          {children}
        </DialogContent>
        <DialogActions>
          <Stack direction="row" alignItems="flex-end" spacing={2}>
            <Button
              color="primary"
              size="small"
              fullWidth={false}
              disableElevation={true}
              variant="outlined"
              handleClick={_handleCancel}
            >
              Cancel
            </Button>
            <Button
              color="primary"
              size="small"
              fullWidth={false}
              disableElevation={true}
              variant="contained"
              handleClick={handleAction}
            >
              Un-enroll
            </Button>
          </Stack>
        </DialogActions>
      </Box>
    </MuiDialog>
  );
};

export { Dialog };
