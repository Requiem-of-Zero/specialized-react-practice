import React from "react";
import Banner from "./Banner";

export default {
  title: "Banner",
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  imgUrl:
    "https://staticc.sportskeeda.com/editor/2022/07/31987-16590245387151-1920.jpg?w=1200",
  subtitle: "NEW PRIME APPAREL",
  title: "For Your Best Day",
  ctas:[
    ctaOne = {
      url: "https://www.google.com",
      ctaTxt: "Shop Now",
      opensNewTab: true,
      ctaStyle: "primary",
    },
    ctaTwo = {
      url: "https://www.google.com",
      ctaTxt: "Learn More",
      opensNewTab: true,
      ctaStyle: "secondary"
    }
  ]
};
