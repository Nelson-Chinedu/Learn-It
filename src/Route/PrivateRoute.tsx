import { ReactElement, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { getUserID } from 'src/features/accountSlice';

import { useGetUserProfileQuery } from 'src/services/userSlice';

type Props = {
  children: ReactElement;
};

const PrivateRoute = ({ children }: Props) => {
  const dispatch = useDispatch();

  const { isSuccess, data } = useGetUserProfileQuery();

  const userId = useMemo(() => data?.payload?.id, [data?.payload?.id]);

  useEffect(() => {
    if (isSuccess && userId) {
      dispatch(getUserID(userId));
    }
  }, [isSuccess, userId, dispatch]);

  if (isSuccess) {
    return children;
  } else {
    return null;
  }
};

export default PrivateRoute;
