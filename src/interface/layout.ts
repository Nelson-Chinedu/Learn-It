import { ReactNode } from 'react';
import { IRoute } from 'src/interface/sidenav';

export interface ILayout {
  children: ReactNode;
  sidenav: IRoute[];
}
