export interface IRoute {
  menu: string;
  path: string;
  Icon: any;
}

export interface ISidenav {
  SIDE_MENUS: IRoute[];
  sidenav: () => void;
}
