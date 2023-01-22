import { useContext } from 'react';

import { UserProfileContext } from 'src/contexts/user-profile-ctx';

import { IUserData } from 'src/interface/user';

export interface IUser {
  data: IUserData;
  isSuccess: boolean;
}

const useUserProfile = () => {
  const { data, isSuccess } = useContext<IUser>(UserProfileContext);

  return { data, isSuccess };
};

export default useUserProfile;
