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

interface ICourseData {
  name: string;
  price: string;
  count: string;
  video: string[];
}

export interface ICourses {
  payload: ICourseData[];
}

export interface IEnrollCourseResponse {
  status: number;
  message: string;
  payload: {
    profile: string;
    course: string;
    id: string;
  };
}

export interface IEnrollCourseProp {
  userId: string;
  courseId: string;
}

export interface IUnEnrollCourseProp {
  userId: string;
  id: string;
}

export interface IGetEnrollCourseDetailProp {
  userId: string;
  courseId: string;
}

export interface IGetEnrollCourseDetailResponse {
  status: number;
  message: string;
  payload: {
    id: string;
    name: string;
    price: string | number;
    thumbnail: string;
    preview: string;
    objectives: string;
    faq: string;
    firstname: string;
    lastname: string;
  };
}

export interface IAddCourseResponse {
  status: number;
  message: string;
  payload: {
    id: string;
    name: string;
    price: string | number;
    count: string | number;
    video: string[];
    thumbnail: string;
    preview: string;
    objectives: string;
    faq: string;
    account: string;
    profile: string;
  };
}

export interface IAddCourseProp {
  video_url: string[];
  course_name: string;
  price: string | number;
  course_objective: string;
  course_faq: string;
  course_thumbnail: string;
  course_preview: string;
}
