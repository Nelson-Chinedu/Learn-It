import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SettingsIcon from '@mui/icons-material/Settings';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const STUDENT_SIDENAV_MENU = [
  {
    menu: 'Dashboard',
    path: '/s/dashboard',
    Icon: DashboardIcon,
  },
  {
    menu: 'Courses',
    path: '/s/courses',
    Icon: LocalLibraryIcon,
  },
  {
    menu: 'Resources',
    path: '/s/resources',
    Icon: AutoStoriesIcon,
  },
  {
    menu: 'Task',
    path: '/s/task',
    Icon: AssignmentIcon,
  },
  {
    menu: 'Chat',
    path: '/s/chat',
    Icon: SmartphoneIcon,
  },
  // {
  //   menu: 'Schedule',
  //   path: '/schedule',
  // },
  {
    menu: 'Profile',
    path: '/s/profile',
    Icon: PersonIcon,
  },
  {
    menu: 'Setting',
    path: '/s/settings',
    Icon: SettingsIcon,
  },
];

export const TEACHER_SIDENAV_MENU = [
  {
    menu: 'Dashboard',
    path: '/m/dashboard',
    Icon: DashboardIcon,
  },
  {
    menu: 'Course',
    path: '/m/course',
    Icon: LocalLibraryIcon,
  },
  {
    menu: 'Student',
    path: '/m/student',
    Icon: PeopleAltIcon,
  },
  {
    menu: 'Transactions',
    path: '/m/transaction',
    Icon: AccountBalanceIcon,
  },
  {
    menu: 'Chat',
    path: '/m/chat',
    Icon: SmartphoneIcon,
  },
  {
    menu: 'Schedule',
    path: '/m/schedule',
    Icon: DateRangeIcon,
  },
  {
    menu: 'Live Class',
    path: '/m/live-class',
    Icon: LaptopChromebookIcon,
  },
  {
    menu: 'Profile',
    path: '/m/profile',
    Icon: PersonIcon,
  },
  {
    menu: 'Settings',
    path: '/m/settings',
    Icon: SettingsIcon,
  },
];
