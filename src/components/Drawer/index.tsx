import { FunctionComponent, ReactElement } from 'react';
import { Drawer as CDrawer, Box } from '@mui/material';
import useDrawer from 'src/hooks/useDrawer';

type Props = {
  children: ReactElement;
  customWidth?: number | string;
  drawerName: string;
};

const Drawer: FunctionComponent<Props> = ({
  children,
  customWidth,
  drawerName,
}) => {
  const [state, setState] = useDrawer();

  const handleClose = () => {
    setState({ ...state, drawerName: '' });
  };

  return (
    <CDrawer
      anchor="right"
      open={state.drawerName === drawerName}
      onClose={handleClose}
    >
      <Box sx={{ width: customWidth || '400px' }}>{children}</Box>
    </CDrawer>
  );
};

export { Drawer };
