import { createContext, FunctionComponent, ReactNode } from 'react';
import { useGetUserProfileQuery } from 'src/features/user/userSlice';

type Props = {
  children: ReactNode;
};

export const TeacherProfileContext = createContext(null);

const TeacherProfileContextProvider: FunctionComponent<Props> = ({
  children,
}) => {
  const { data, isSuccess } = useGetUserProfileQuery();

  return (
    <TeacherProfileContext.Provider value={{ data, isSuccess }}>
      {children}
    </TeacherProfileContext.Provider>
  );
};

export default TeacherProfileContextProvider;
