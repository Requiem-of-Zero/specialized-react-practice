import React from "react";
import {
  CategorySectionWrapper,
  CategorySectionContainer,
  CategorySectionLink,
  CategorySectionHeaderLink,
  CategorySectionList
} from "./CategorySection.styles";
import model from "../CategorySection/data/model";

const CategorySection = ({ section }) => {
  return section.map(s => (
    <CategorySectionWrapper>
      <CategorySectionContainer>
        <CategorySectionList>
        <CategorySectionHeaderLink href={s.sectionUrl} id='category-header'>
          {s.sectionTitle}
        </CategorySectionHeaderLink>
        {s.sectionLinks.map((link, i) => {
          const key = "section_link" + i;
          return (
            <li>
              <CategorySectionLink href={link.url} key={key}>
                {link.label}
              </CategorySectionLink>
            </li>
          );
        })}
        </CategorySectionList>
      </CategorySectionContainer>
    </CategorySectionWrapper>
    )
  )
};

export default CategorySection;
