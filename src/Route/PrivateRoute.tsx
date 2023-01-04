import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { AUTH_PATHS, BASE_PATHS } from 'src/constant/path';

import { RootState } from 'src/store';

type Props = {
  children: ReactElement;
};

const PrivateRoute = ({ children }: Props) => {
  const location = useLocation();

  const { isLoggedIn } = useSelector((state: RootState) => state.account);

  if (!isLoggedIn) {
    return (
      <Navigate
        to={`/${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNIN}`}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;
