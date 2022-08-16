import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  opensNewTab: true
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    url: "https://www.specialized.com/us/en/shop/clothing/c/clothing#/filter:productfamily:Prime-Series",
    ctaTxt: "Shop Now",
    ctaStyle: "primary"
};

Secondary.args = {
  ctaTxt: "Learn More",
  ctaStyle: "secondary"
}
