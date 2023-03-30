import { useSelector } from 'react-redux';

import { RootState } from 'src/store';

import { useGetUserBioQuery } from 'src/modules/Teacher/services/teacherSlice';

const useFetchMentorProfile = () => {
  const { userId } = useSelector((state: RootState) => state.account);
  const { data, isSuccess } = useGetUserBioQuery(userId);

  return { data, isSuccess };
};

export default useFetchMentorProfile;
