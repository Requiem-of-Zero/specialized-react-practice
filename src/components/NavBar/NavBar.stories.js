import React from 'react';

import NavBar from './NavBar';

export default {
  title: 'NavBar',
  component: NavBar,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <NavBar {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'NavBar',
   subtitle: '',
};