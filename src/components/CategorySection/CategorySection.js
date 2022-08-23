import React from "react";
import {
  CategorySectionWrapper,
  CategorySectionContainer,
  CategorySectionLink,
  CategorySectionHeaderLink,
  CategorySectionList
} from "./CategorySection.styles";

const CategorySection = ({ sectionTitle, sectionUrl, sectionLinks }) => {
  return (
    <CategorySectionWrapper>
      <CategorySectionContainer>
        <CategorySectionList>
        <CategorySectionHeaderLink href={sectionUrl}>
          {sectionTitle}
        </CategorySectionHeaderLink>
        {sectionLinks.map((section, i) => {
          const key = "section_link" + i;
          return (
            <li>
              <CategorySectionLink href={section.url} key={key}>
                {section.label}
              </CategorySectionLink>
            </li>
          );
        })}
        </CategorySectionList>
      </CategorySectionContainer>
    </CategorySectionWrapper>
  );
};

export default CategorySection;
