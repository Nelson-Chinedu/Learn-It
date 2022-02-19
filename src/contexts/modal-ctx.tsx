import { createContext, ReactNode, FunctionComponent, useState } from 'react';

type Props = {
  children: ReactNode;
};

type StateVal = {
  modalName: string;
};
export const ModalContext = createContext(null);

const ModalContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [state, setState] = useState<StateVal>({
    modalName: '',
  });

  return (
    <ModalContext.Provider value={[state, setState]}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
