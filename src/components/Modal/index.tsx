import { FunctionComponent, ReactNode } from 'react';
import { Modal as CModal } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { Wrapper } from 'src/components/Modal/styled.modal';

import useModal from 'src/hooks/useModal';

type Props = {
  children: ReactNode;
  modalName: string;
  title: string;
  width?: string;
};

const Modal: FunctionComponent<Props> = ({
  children,
  modalName,
  title,
  width = '50%',
}) => {
  const [state, setState] = useModal();

  const handleClose = () => {
    setState({ ...state, modalName: '', data: null });
  };

  return (
    <CModal open={state.modalName === modalName} disableAutoFocus={true}>
      <Wrapper width={width}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ py: 4, px: 6 }}
        >
          <Grid>
            <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>
              {title}
            </Typography>
          </Grid>
          <Grid>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Box sx={{ pb: 4, px: 6 }}>{children}</Box>
      </Wrapper>
    </CModal>
  );
};

export { Modal };
