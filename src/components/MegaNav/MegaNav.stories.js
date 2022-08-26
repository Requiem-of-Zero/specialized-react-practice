import React from "react";
import MegaNav from "./MegaNav";
import { categories } from "../../constants/NavBarArgs";

export default {
  title: "MegaNav",
  component: MegaNav,
};

const Template = (args) => <MegaNav {...args} />;

export const BikeNav = Template.bind({});

BikeNav.args = { 
  ...categories
}