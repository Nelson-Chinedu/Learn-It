import { useContext } from 'react';

import { ModalContext } from 'src/contexts/modal-ctx';

const useModal = () => {
  const [state, setState] = useContext(ModalContext);

  return [state, setState];
};

export default useModal;
