import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { getUserID } from 'src/features/accountSlice';

import { useGetUserProfileQuery } from 'src/services/userSlice';

type Props = {
  children: ReactElement;
};

const PrivateRoute = ({ children }: Props) => {
  const dispatch = useDispatch();

  const { isSuccess, data } = useGetUserProfileQuery();

  if (isSuccess) {
    dispatch(getUserID(data?.payload?.id));
    return children;
  } else return null;
};

export default PrivateRoute;
