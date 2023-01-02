import { createContext, FunctionComponent, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useGetUserProfileQuery } from 'src/services/userSlice';
import { RootState } from 'src/store';

type Props = {
  children: ReactNode;
};

export const UserProfileContext = createContext(null);

const UserProfileContextProvider: FunctionComponent<Props> = ({ children }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.account);
  const { data, isSuccess } = useGetUserProfileQuery(undefined, {
    skip: !isLoggedIn,
  });

  return (
    <UserProfileContext.Provider value={{ data, isSuccess }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileContextProvider;
