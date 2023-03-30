export interface IBio {
  payload: {
    bio: {
      mentorBio?: string;
      company?: string;
      yearsOfExperience?: string;
      title?: string;
      fee?: string;
      timezone?: string;
    };
  };
}

export interface IUpdateResponseProp {
  userId: string;
  payload: {
    mentorBio?: string;
    company?: string;
    fee?: string;
    timezone?: string;
    yearsOfExperience?: string;
  };
}
