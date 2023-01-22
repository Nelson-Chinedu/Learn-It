export interface IBio {
  payload: {
    bio: {
      mentorBio: string;
    };
  };
}

export interface IUpdateResponseProp {
  userId: string;
  payload: {
    mentorBio: string;
  };
}
