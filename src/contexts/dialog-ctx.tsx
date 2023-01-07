import { createContext, ReactNode, FunctionComponent, useState } from 'react';

type Props = {
  children: ReactNode;
};

type StateVal = {
  dialogName: string;
  id: string | number | null;
};
export const DialogContext = createContext(null);

const DialogContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [state, setState] = useState<StateVal>({
    dialogName: '',
    id: null,
  });

  return (
    <DialogContext.Provider value={[state, setState]}>
      {children}
    </DialogContext.Provider>
  );
};

export default DialogContextProvider;
