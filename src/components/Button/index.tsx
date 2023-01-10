import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { Button as MButton, CircularProgress } from '@mui/material';

export interface IProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'success' | 'error';
  handleClick?: () => void;
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  href?: string;
  sx?: object;
}

const Button: FunctionComponent<IProps> = ({
  variant,
  color,
  children,
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
      data-testid="button"
      startIcon={
        disabled && <CircularProgress size={20} style={{ color: '#fff' }} />
      }
      {...rest}
    >
      {children}
    </MButton>
  );
};

export { Button };
