export interface IRoute {
  menu: string;
  path: string;
  Icon: any;
  isComingSoon: boolean;
}

export interface ISidenav {
  SIDE_MENUS: IRoute[];
  sidenav: () => void;
}
