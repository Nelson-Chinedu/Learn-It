import { useContext } from 'react';

import { TeacherProfileContext } from 'src/contexts/teacher-profile-ctx';

interface IUser {
  data: {
    payload: {
      firstname: string;
      lastname: string;
      phone: string;
      city: string;
      state: string;
      zipCode: string;
      address: string;
      country: string;
      email: string;
      role: string;
      mentorBio?: string;
    };
  };
  isSuccess: boolean;
}

const useTeacherProfile = () => {
  const { data, isSuccess } = useContext<IUser>(TeacherProfileContext);

  return { data, isSuccess };
};

export default useTeacherProfile;
