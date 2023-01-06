import { ICourse } from 'src/interface/course';

interface IPayload {
  id: string;
  courseId: string;
  course: ICourse;
}

export interface IEnrollCourse {
  payload: IPayload[];
}
