export interface IProfile {
  id: string;
  firstname: string;
  lastname: string;
  phone?: string | number;
  city?: string;
  state?: string;
  zipCode?: string;
  address?: string;
  country?: string;
  picture?: string;
}
