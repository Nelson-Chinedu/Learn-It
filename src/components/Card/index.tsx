import { FunctionComponent, ReactNode } from 'react';
import { Card as MCard } from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface ICard {
  children: ReactNode;
  width: string;
  height?: string;
  overflow?: string;
  borderRadius: string;
  background?: string;
  border?: string;
}

const useStyles = makeStyles({
  root: {
    boxShadow:
      '0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 12%), 0px 1px 4px 0px rgb(0 0 0 / 5%) !important',
  },
});

const Card: FunctionComponent<ICard> = ({
  children,
  width,
  height,
  overflow,
  borderRadius,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <MCard
      elevation={3}
      className={classes.root}
      style={{ width, height, borderRadius, overflow, ...rest }}
    >
      {children}
    </MCard>
  );
};

export { Card };
