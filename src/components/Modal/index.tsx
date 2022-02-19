import { FunctionComponent, ReactNode } from 'react';
import { Modal as CModal } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useStyles } from 'src/components/Modal/styled.modal';

import useModal from 'src/hooks/useModal';

type Props = {
  children: ReactNode;
  modalName: string;
};

const Modal: FunctionComponent<Props> = ({ children, modalName }) => {
  const classes = useStyles();
  const [state, setState] = useModal();

  const handleClose = () => {
    setState({ ...state, modalName: '' });
  };

  return (
    <CModal open={state.modalName === modalName} disableAutoFocus={true}>
      <Box className={classes.root}>
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          sx={{ p: 2 }}
        >
          <Grid item>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Box sx={{ p: 4 }}>{children}</Box>
      </Box>
    </CModal>
  );
};

export { Modal };
