import React, {
  FunctionComponent,
  ReactNode,
  ChangeEvent,
  FocusEvent,
} from 'react';
import TextField from '@mui/material/TextField';

export interface ITextfield {
  variant?: 'outlined' | 'filled' | 'standard';
  value?: string;
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'date' | 'url';
  size?: 'small' | 'medium';
  name?: string;
  fullWidth?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'success';
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  InputProps?: object;
  InputLabelProps?: object;
  label?: string;
  placeholder?: string;
  select?: boolean;
  rows?: number;
  maxRows?: number;
  required?: boolean;
  helperText?: any;
  error?: boolean;
  multiline?: boolean;
  disabled?: boolean;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  sx?: object;
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
        data-testid="select"
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
