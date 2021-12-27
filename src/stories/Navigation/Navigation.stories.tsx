import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Topnav } from 'src/components/Navigation/topnav';

export default {
  title: 'Navigation',
  component: Topnav,
} as Meta;

const Template: Story = (args) => <Topnav {...args} />;

export const Navbar = Template.bind({});
