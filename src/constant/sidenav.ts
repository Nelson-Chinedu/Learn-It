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
    isComingSoon: false,
  },
  {
    menu: 'Recommended Learning',
    path: '/s/courses',
    Icon: AutoStoriesIcon,
    isComingSoon: false,
  },
  {
    menu: 'Resources',
    path: '/s/resources',
    Icon: LocalLibraryIcon,
    isComingSoon: false,
  },
  {
    menu: 'Task',
    path: '/s/task',
    Icon: AssignmentIcon,
    isComingSoon: false,
  },
  {
    menu: 'Chat',
    path: '/s/chat',
    Icon: SmartphoneIcon,
    isComingSoon: false,
  },
  // {
  //   menu: 'Schedule',
  //   path: '/schedule',
  // },
  {
    menu: 'Profile',
    path: '/s/profile',
    Icon: PersonIcon,
    isComingSoon: false,
  },
  {
    menu: 'Settings',
    path: '/s/settings',
    Icon: SettingsIcon,
    isComingSoon: false,
  },
];

export const TEACHER_SIDENAV_MENU = [
  {
    menu: 'Dashboard',
    path: '/m/dashboard',
    Icon: DashboardIcon,
    isComingSoon: false,
  },
  // {
  //   menu: 'Course',
  //   path: '/m/course',
  //   Icon: LocalLibraryIcon,
  //   isComingSoon: false,
  // },
  {
    menu: 'Mentees',
    path: '/m/mentees',
    Icon: PeopleAltIcon,
    isComingSoon: false,
  },
  {
    menu: 'Transactions',
    path: '/m/transaction',
    Icon: AccountBalanceIcon,
    isComingSoon: true,
  },
  {
    menu: 'Chat',
    path: '/m/chat',
    Icon: SmartphoneIcon,
    isComingSoon: false,
  },
  {
    menu: 'Schedule',
    path: '/m/schedule',
    Icon: DateRangeIcon,
    isComingSoon: true,
  },
  {
    menu: 'Live Class',
    path: '/m/live-class',
    Icon: LaptopChromebookIcon,
    isComingSoon: true,
  },
  {
    menu: 'Profile',
    path: '/m/profile',
    Icon: PersonIcon,
    isComingSoon: false,
  },
];
