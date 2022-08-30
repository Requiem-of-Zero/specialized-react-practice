import React from "react";
import QuadBanner from "./QuadBanner";
import QuadBannerArgs from "../../constants/QuadBannerArgs";

export default {
  title: "QuadBanner",
  component: QuadBanner,
};

const Template = (args) => <QuadBanner {...args} />;

export const Blocks = Template.bind({});

Blocks.args = {
  ...QuadBannerArgs,
};
