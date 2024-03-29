import { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { AUTH_PATHS, BASE_PATHS, STUDENT_PATHS } from 'src/constant/path';

import { getUserDetail, getUserID } from 'src/features/accountSlice';

import { useGetUserProfileQuery } from 'src/services/userSlice';

import { RootState } from 'src/store';

type Props = {
  children: ReactElement;
};

const PrivateRoute = ({ children }: Props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoggedIn, isSubscribed } = useSelector(
    (state: RootState) => state.account
  );
  const { isSuccess, data } = useGetUserProfileQuery();

  if (!isLoggedIn) {
    return (
      <Navigate
        to={`/${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNIN}`}
        state={{ from: location }}
        replace
      />
    );
  } else if (isSuccess) {
    dispatch(getUserID(data?.payload?.id));
    dispatch(getUserDetail({ picture: data?.payload?.picture }));
    return children;
  } else if (
    !isSubscribed &&
    isLoggedIn &&
    data &&
    data.payload.role !== 'mentor'
  ) {
    return (
      <Navigate to={`/${BASE_PATHS.APP}/${STUDENT_PATHS.ONBOARDING}`} replace />
    );
  }
  return null;
};

export default PrivateRoute;
