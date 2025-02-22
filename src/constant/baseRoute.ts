import LandingRoute from 'src/modules/Landing/routes';
import AuthRoute from 'src/modules/Auth/routes';
import MentorRoute from 'src/modules/Teacher/routes';
import StudentRoute from 'src/modules/Student/routes';

import { Layout } from 'src/Layout';

import { BASE_PATHS } from 'src/constant/path';
import {
  TEACHER_SIDENAV_MENU,
  STUDENT_SIDENAV_MENU,
} from 'src/constant/sidenav';

export const BASE_ROUTES = [
  {
    path: '/*',
    Component: LandingRoute,
    useAuth: false,
  },
  {
    path: `${BASE_PATHS.AUTH}/*`,
    Component: AuthRoute,
    useAuth: false,
  },
  {
    path: `${BASE_PATHS.MENTOR}/*`,
    Component: MentorRoute,
    Layout: Layout,
    sidenav: TEACHER_SIDENAV_MENU,
    useAuth: true,
  },
  {
    path: `${BASE_PATHS.STUDENT}/*`,
    Component: StudentRoute,
    Layout: Layout,
    sidenav: STUDENT_SIDENAV_MENU,
    useAuth: true,
  },
  {
    path: `${BASE_PATHS.APP}/*`,
    Component: StudentRoute,
    useAuth: true,
  },
];
