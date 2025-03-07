import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Button, IProps } from 'src/components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'clicked' },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary', 'success', 'error'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<IProps> = (args: IProps) => <Button {...args} />;

export const Primary = Template.bind({});

export const PrimaryOutlined = Template.bind({});

export const Secondary = Template.bind({});

export const SecondaryOutlined = Template.bind({});

Primary.args = {
  variant: 'contained',
  color: 'primary',
  fullWidth: false,
  disabled: false,
  size: 'small',
  children: 'Click me',
};

Secondary.args = {
  variant: 'contained',
  color: 'secondary',
  fullWidth: false,
  disabled: false,
  size: 'small',
  children: 'Click me',
};

PrimaryOutlined.args = {
  variant: 'outlined',
  color: 'primary',
  fullWidth: false,
  disabled: false,
  size: 'small',
  children: 'Click me',
};

SecondaryOutlined.args = {
  variant: 'outlined',
  color: 'secondary',
  fullWidth: false,
  disabled: false,
  size: 'small',
  children: 'Click me',
};
