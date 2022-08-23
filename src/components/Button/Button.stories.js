import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  opensNewTab: true,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  ctaTxt: "Shop Now",
  ctaStyle: "primary",
  opensNewTab: true,
};

Secondary.args = {
  ctaTxt: "Learn More",
  ctaStyle: "secondary",
  opensNewTab: true,
};
