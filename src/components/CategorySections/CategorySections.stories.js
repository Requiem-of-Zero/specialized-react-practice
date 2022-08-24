import React from "react";
import CategorySections from "./CategorySections";
import model from "./data/model";

export default {
  title: "CategorySections",
  component: CategorySections,
};

const Template = (args) => <CategorySections {...args} />;

export const Kids = Template.bind({});

Kids.args = {
    ...model
};
