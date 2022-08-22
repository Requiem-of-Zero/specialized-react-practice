import React from "react";
import MegaNav from "./MegaNav";

export default {
  title: "MegaNav",
  component: MegaNav,
};

const Template = (args) => <MegaNav {...args} />;

export const Primary = Template.bind({});

Primary.args = {  }