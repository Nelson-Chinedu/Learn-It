import { IProfile } from 'src/interface/profile';

export interface ICourse {
  id: string;
  name: string;
  price: string | number;
  count: number | string;
  video: string[];
  thumbnail: string;
  preview: string;
  objectives: string;
  faq: string;
  profile: IProfile;
}
