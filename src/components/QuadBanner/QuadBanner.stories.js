import React from "react";
import QuadBanner from "./QuadBanner";
import model from "./data/model";

export default {
  title: "QuadBanner",
  component: QuadBanner,
};

const Template = (args) => <QuadBanner {...args} />;

export const Blocks = Template.bind({});

Blocks.args = {
  ...model
};
