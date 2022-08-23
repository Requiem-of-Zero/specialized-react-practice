import React from "react";
import CategorySections from "./CategorySections";
import CategorySection from './CategorySection/CategorySection';
import model from "./data/model";

export default {
  title: "CategorySections",
  component: CategorySections,
};

const Template = (args) => <CategorySections {...args} />;

export const Bikes = Template.bind({});

Bikes.args = {
    ...model
};
