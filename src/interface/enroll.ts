// import { ICourse } from 'src/interface/course';

export interface IPayload {
  id: string;
  // courseId: string;
  // course: ICourse;
  profile: {
    id: string;
    picture: string;
    firstname: string;
    lastname: string;
  };
}

export interface IEnrollCourse {
  payload: IPayload[];
}
