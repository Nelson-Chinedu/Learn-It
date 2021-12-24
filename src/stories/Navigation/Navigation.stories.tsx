import React from 'react';
import { Story, Meta } from '@storybook/react';

import Navigation from 'src/components/Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
} as Meta;

const Template: Story = (args) => <Navigation {...args} />;

export const Navbar = Template.bind({});
