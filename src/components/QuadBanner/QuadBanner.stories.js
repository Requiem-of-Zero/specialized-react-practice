import React from "react";
import QuadBanner from "./QuadBanner";
import { categories } from "../../constants/NavBarArgs";

export default {
  title: "QuadBanner",
  component: QuadBanner,
};

const Template = (args) => <QuadBanner {...args} />;

export const Blocks = Template.bind({});

Blocks.args = {
  ...categories,
};
