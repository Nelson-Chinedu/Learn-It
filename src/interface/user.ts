export interface IUserData {
  payload: {
    id?: string;
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
