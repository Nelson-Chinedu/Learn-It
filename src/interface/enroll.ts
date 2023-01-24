import { ICourse } from 'src/interface/course';

export interface IPayload {
  id: string;
  courseId: string;
  course: ICourse;
}

export interface IEnrollCourse {
  payload: IPayload[];
}
