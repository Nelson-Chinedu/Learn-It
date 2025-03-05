import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import {
  ITopNavigation,
  TopNavigation,
} from 'src/components/Navigation/TopNavigation';

export default {
  title: 'Navigation',
  component: TopNavigation,
} as Meta;

const Template: StoryFn = (args: ITopNavigation) => <TopNavigation {...args} />;

export const Navbar = Template.bind({});
