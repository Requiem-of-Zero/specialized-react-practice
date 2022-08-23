import React from "react";
import CategorySection from "./CategorySection";
import model from "./data/model";

export default {
  title: "CategorySection",
  component: CategorySection,
};

const Template = (args) => <CategorySection {...args} />;

export const Bikes = Template.bind({});

Bikes.args = {
    ...model
};
