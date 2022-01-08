import { FunctionComponent, ReactNode, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

export interface ITextfield {
  variant: 'outlined' | 'filled' | 'standard';
  value?: string;
  type?: 'text' | 'password' | 'email' | 'search' | 'tel';
  size: 'small' | 'medium';
  name: string;
  fullWidth: boolean;
  color: 'primary' | 'secondary' | 'error' | 'success';
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  InputProps?: object;
  label?: string;
  placeholder?: string;
  select?: boolean;
  rows?: number;
  required?: boolean;
  helperText?: ReactNode;
  error?: boolean;
  multiline?: boolean;
}

const Input: FunctionComponent<ITextfield> = ({
  variant,
  value,
  type,
  size,
  name,
  fullWidth,
  color,
  children,
  handleChange,
  select,
  ...rest
}) => {
  if (select) {
    return (
      <TextField
        select
        variant={variant}
        value={value}
        type={type}
        size={size}
        name={name}
        fullWidth={fullWidth}
        color={color}
        onChange={handleChange}
        {...rest}
      >
        {children}
      </TextField>
    );
  }
  return (
    <TextField
      variant={variant}
      value={value}
      type={type}
      size={size}
      name={name}
      fullWidth={fullWidth}
      color={color}
      onChange={handleChange}
      {...rest}
    />
  );
};

export { Input };
