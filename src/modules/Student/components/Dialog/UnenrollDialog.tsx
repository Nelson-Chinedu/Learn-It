import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

import { Dialog } from 'src/components';

import useDialog from 'src/hooks/useDialog';
import {
  getEnrolledCourses,
  getUnEnrolledCourses,
} from 'src/features/courseSlice';

import { useUnEnrollCourseMutation } from 'src/modules/Student/services/studentSlice';

import { RootState } from 'src/store';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

const UnenrollDialog: FunctionComponent<Record<string, never>> = () => {
  const [state, setState] = useDialog();
  const [unEnrollCourse] = useUnEnrollCourseMutation();
  const { enrolledCourses, unEnrolledCourses } = useSelector(
    (state: RootState) => state.course
  );
  const dispatch = useDispatch();

  const _handleAction = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const payload = {
      courseId: state?.id,
    };
    try {
      const res = await unEnrollCourse(payload).unwrap();
      if (res) {
        const enrolledCoursesArr = enrolledCourses
          .filter(
            (course: { courseId: string | number }) =>
              course.courseId !== state?.id
          )
          .map((el) => el);

        const unenrolledCoursesArr = enrolledCourses
          .filter(
            (course: { courseId: string | number }) =>
              course.courseId === state?.id
          )
          .map((el: any) => el.course);

        dispatch(getEnrolledCourses({ data: enrolledCoursesArr }));
        dispatch(
          getUnEnrolledCourses({
            data: [...unEnrolledCourses, unenrolledCoursesArr],
          })
        );
        successNotification(res.message);
        setState({ ...state, dialogName: '', id: '' });
      }
    } catch (error) {
      errorNotification('An error occurred, Please try again');
    }
  };

  return (
    <Dialog
      dialogName="Unenroll"
      title="Are you sure you want to un-enroll?"
      handleAction={_handleAction}
    >
      <Typography variant="subtitle2">
        When you un-enroll, this course will no longer appear on your course
        page. you can re-enroll through the catalog on your dashboard if you
        change your mind.
      </Typography>
    </Dialog>
  );
};

export default UnenrollDialog;
