import { useContext } from 'react';

import { UserProfileContext } from 'src/contexts/user-profile-ctx';

export interface IUserData {
  payload: {
    firstname: string;
    lastname: string;
    phone?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    address?: string;
    country?: string;
    email?: string;
    role?: string;
    mentorBio?: string;
    picture?: string;
  };
}

export interface IUser {
  data: IUserData;
  isSuccess: boolean;
}

const useUserProfile = () => {
  const { data, isSuccess } = useContext<IUser>(UserProfileContext);

  return { data, isSuccess };
};

export default useUserProfile;
