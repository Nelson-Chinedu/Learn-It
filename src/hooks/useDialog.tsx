import { useContext } from 'react';

import { DialogContext } from 'src/contexts/dialog-ctx';

const useDialog = () => {
  const [state, setState] = useContext(DialogContext);

  return [state, setState];
};

export default useDialog;
