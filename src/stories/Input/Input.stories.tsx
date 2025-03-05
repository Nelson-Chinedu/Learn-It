import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Input, ITextfield } from 'src/components/Input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: StoryFn<ITextfield> = (args: ITextfield) => <Input {...args} />;

export const Standard = Template.bind({});

export const Outlined = Template.bind({});

export const Filled = Template.bind({});

export const Password = Template.bind({});

export const Email = Template.bind({});

export const Search = Template.bind({});

export const Text = Template.bind({});

export const Tel = Template.bind({});

export const Placeholder = Template.bind({});

export const Label = Template.bind({});

export const PredefinedValue = Template.bind({});

export const Error = Template.bind({});

export const PredefinedError = Template.bind({});

export const Multiline = Template.bind({});

export const Select = Template.bind({});

export const Size = Template.bind({});

export const Fullwidth = Template.bind({});

export const ColorPrimary = Template.bind({});

export const ColorSecondary = Template.bind({});

export const ColorSuccess = Template.bind({});

export const ColorError = Template.bind({});

Outlined.args = {
  variant: 'outlined',
  name: 'name',
};

Filled.args = {
  variant: 'filled',
  name: 'name',
};

Standard.args = {
  variant: 'standard',
  name: 'name',
};

Password.args = {
  variant: 'outlined',
  name: 'name',
  type: 'password',
};

Email.args = {
  variant: 'outlined',
  name: 'name',
  type: 'email',
};

Search.args = {
  variant: 'outlined',
  name: 'name',
  type: 'search',
};

Text.args = {
  variant: 'outlined',
  name: 'name',
  type: 'text',
};

Tel.args = {
  variant: 'outlined',
  name: 'name',
  type: 'tel',
};

Placeholder.args = {
  variant: 'outlined',
  name: 'name',
  placeholder: 'placeholder text here',
};

Label.args = {
  variant: 'outlined',
  name: 'name',
  label: 'label text here',
};

PredefinedValue.args = {
  variant: 'outlined',
  name: 'name',
  value: 'John Doe',
};

Error.args = {
  variant: 'outlined',
  name: 'name',
  error: true,
};

PredefinedError.args = {
  variant: 'outlined',
  name: 'name',
  type: 'email',
  error: true,
  helperText: 'Invalid email',
};

Multiline.args = {
  variant: 'outlined',
  name: 'name',
  multiline: true,
};

Select.args = {
  variant: 'outlined',
  name: 'name',
  select: true,
  fullWidth: true,
};

Size.args = {
  variant: 'outlined',
  name: 'name',
  size: 'medium',
};

Fullwidth.args = {
  variant: 'outlined',
  name: 'name',
  fullWidth: true,
};

ColorPrimary.args = {
  variant: 'outlined',
  color: 'primary',
  name: 'name',
};

ColorSecondary.args = {
  variant: 'outlined',
  color: 'secondary',
  name: 'name',
};

ColorSuccess.args = {
  variant: 'outlined',
  color: 'success',
  name: 'name',
};

ColorError.args = {
  variant: 'outlined',
  color: 'error',
  name: 'name',
};
