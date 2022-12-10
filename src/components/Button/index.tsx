import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { Button as MButton } from '@mui/material';

export interface IProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  color: 'primary' | 'secondary' | 'success' | 'error';
  handleClick?: () => void;
  children: ReactNode;
  size: 'small' | 'medium' | 'large';
  fullWidth: boolean;
  disabled?: boolean;
  disableElevation: boolean;
  href?: string;
  sx?: object;
}

const Button: FunctionComponent<IProps> = ({
  variant,
  color,
  children,
  disableElevation,
  size,
  fullWidth,
  disabled,
  href,
  handleClick,
  ...rest
}) => {
  return (
    <MButton
      variant={variant}
      color={color}
      onClick={handleClick}
      size={size}
      fullWidth={fullWidth}
      href={href}
      disabled={disabled}
      disableElevation={disableElevation}
      data-testid="button"
      {...rest}
    >
      {children}
    </MButton>
  );
};

export { Button };
