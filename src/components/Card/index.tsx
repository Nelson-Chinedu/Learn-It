import { FunctionComponent, ReactNode } from 'react';
import { Card as MCard } from '@mui/material';

export interface ICard {
  children: ReactNode;
  width: string;
  borderRadius: string;
}

const Card: FunctionComponent<ICard> = ({ children, width, borderRadius }) => {
  return <MCard style={{ width, borderRadius }}>{children}</MCard>;
};

export default Card;
