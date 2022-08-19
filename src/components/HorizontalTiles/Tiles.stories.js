import React from "react";
import Tiles from "./Tiles";

export default {
  title: "Tiles",
  component: Tiles,
};

const Template = (args) => <Tiles {...args} />;

export const Primary = Template.bind({});
