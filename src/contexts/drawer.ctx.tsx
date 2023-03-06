import { createContext, ReactNode, FunctionComponent, useState } from 'react';

type Props = {
  children: ReactNode;
};

type StateVal = {
  drawerName: string;
  data: null;
};
export const DrawerContext = createContext(null);

const DrawerContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [state, setState] = useState<StateVal>({
    drawerName: '',
    data: null,
  });

  return (
    <DrawerContext.Provider value={[state, setState]}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
