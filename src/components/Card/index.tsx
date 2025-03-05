import { FunctionComponent, ReactNode } from 'react';
import { Card as MCard } from '@mui/material';
import { styled } from '@mui/material';

export interface ICard {
  children: ReactNode;
  width: string;
  height?: string;
  overflow?: string;
  borderRadius: string;
  background?: string;
  border?: string;
}

const Wrapper = styled(MCard)({
  boxShadow:
    '0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 12%), 0px 1px 4px 0px rgb(0 0 0 / 5%) !important',
});

const Card: FunctionComponent<ICard> = ({
  children,
  width,
  height,
  overflow,
  borderRadius,
  ...rest
}) => {
  return (
    <Wrapper
      elevation={3}
      style={{ width, height, borderRadius, overflow, ...rest }}
    >
      {children}
    </Wrapper>
  );
};

export { Card };
