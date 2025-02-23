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
  isLoading: boolean;
  children: ReactElement;
  btnLabel: string;
  color?: 'primary' | 'error';
};

const Dialog: FunctionComponent<Props> = ({
  dialogName,
  title,
  handleAction,
  isLoading,
  children,
  btnLabel,
  color = 'primary',
}) => {
  const [state, setState] = useDialog();

  const _handleCancel = () => {
    setState({ ...state, dialogName: '', id: '' });
  };

  return (
    <MuiDialog open={state.dialogName === dialogName}>
      <Box sx={{ padding: '1em 2em' }}>
        <DialogTitle>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ padding: '0px !important' }}>
          {children}
        </DialogContent>
        <DialogActions>
          <Stack direction="row" alignItems="flex-end" spacing={2}>
            <Button
              size="medium"
              fullWidth={false}
              variant="outlined"
              handleClick={_handleCancel}
            >
              Cancel
            </Button>
            <Button
              size="medium"
              fullWidth={false}
              handleClick={handleAction}
              disabled={isLoading}
              color={color}
            >
              {btnLabel}
            </Button>
          </Stack>
        </DialogActions>
      </Box>
    </MuiDialog>
  );
};

export { Dialog };
