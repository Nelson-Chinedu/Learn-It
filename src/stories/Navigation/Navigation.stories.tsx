import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TopNavigation } from 'src/components/Navigation/TopNavigation';

export default {
  title: 'Navigation',
  component: TopNavigation,
} as Meta;

const Template: Story = (args: any) => <TopNavigation {...args} />;

export const Navbar = Template.bind({});
