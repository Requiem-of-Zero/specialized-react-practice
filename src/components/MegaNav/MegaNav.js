import React from "react";
import Button from "../Button/Button";
import CategorySection from "../CategorySection/CategorySection";
import CategorySections from "../CategorySections/CategorySections";

import {
  MegaNavWrapper,
  MegaNavLeftContainer,
  MegaNavMiddleContainer,
  MegaNavRightContainer,
  MegaNavLeftLink,
  MegaNavLinkList,
  MegaNavList,
  MegaNavContainer,
  NavBreak
} from "./MegaNav.styles";

const MegaNav = ({
  megaNavLeftSection,
  megaNavMiddleSection,
  megaNavRightSection,
}) => {
  const handleMiddleSections = (categories) => {
    if (!categories || !categories[0] || !categories[0].categorySections)
      return null;

    const uniqueColumns = [
      ...new Set(
        categories[0].categorySections.map((category) => category.column)
      ),
    ];

    const sections = uniqueColumns.map((column) => {
      return categories[0].categorySections.filter(
        (section) => section.column === column
      );
    });

    return sections.map((section, i) => {
      return (
        <li>
          <CategorySection section={section} />
        </li>
      );
    });
  };
  
  return (
    <MegaNavWrapper>
      <MegaNavContainer>
        <MegaNavLeftContainer>
          <MegaNavLinkList>
            {megaNavLeftSection.links.map((obj, i) => {
              const key = "navbar_left-link-" + i;
              return (
                <MegaNavLeftLink href={obj.url} key={key}>
                  {obj.label}
                </MegaNavLeftLink>
              );
            })}
          </MegaNavLinkList>
          {megaNavLeftSection.cta ? <Button {...megaNavLeftSection.cta} /> : <></>}
        </MegaNavLeftContainer>
        <NavBreak></NavBreak>
        <MegaNavMiddleContainer>
          <MegaNavList>
            {handleMiddleSections(megaNavMiddleSection.categories)}
          </MegaNavList>
        </MegaNavMiddleContainer>
        <NavBreak></NavBreak>
        <MegaNavRightContainer>
          <CategorySections sections={megaNavRightSection.categorySections} />
        </MegaNavRightContainer>
      </MegaNavContainer>
    </MegaNavWrapper>
  );
};

export default MegaNav;
