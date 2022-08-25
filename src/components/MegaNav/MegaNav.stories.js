import React from "react";
import MegaNav from "./MegaNav";
import model from "./data/model";

export default {
  title: "MegaNav",
  component: MegaNav,
};

const Template = (args) => <MegaNav {...args} />;

export const BikeNav = Template.bind({});

BikeNav.args = { 
  ...model
}