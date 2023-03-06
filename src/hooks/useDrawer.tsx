import { useContext } from 'react';

import { DrawerContext } from 'src/contexts/drawer.ctx';

const useDrawer = () => {
  const [state, setState] = useContext(DrawerContext);

  return [state, setState];
};

export default useDrawer;
